/* ===============================
   ONLYFIGS STORE ENGINE (LOCAL)
   Cart + Wishlist + Checkout
================================ */ // Store Engine for OnlyFigs

// Helper to get ALL products
function getAllProducts() {
    // 1. Prefer global PRODUCTS from data.js
    if (typeof PRODUCTS !== 'undefined') {
        return PRODUCTS;
    }
    // 2. Fallback to scraped data if any
    const scraped = localStorage.getItem("scraped_products");
    if (scraped) {
        return JSON.parse(scraped);
    }
    return [];
}

const OF_CART_KEY = "onlyfigs_cart";
const OF_WISH_KEY = "onlyfigs_wishlist";
const OF_ORDER_KEY = "onlyfigs_orders";
const OF_SHIP_KEY = "onlyfigs_shipping";
const OF_CURRENCY = "MYR";

const OF_SHIPPING_RATES = {
  "peninsular": { label: "Peninsular Malaysia", price: 10 },
  "sabah-sarawak": { label: "Sabah & Sarawak", price: 15 },
  "worldwide": { label: "Worldwide", price: 50 }
};

/* ---------- Helpers ---------- */
const money = (n) => {
  try {
    return new Intl.NumberFormat("en-MY", {
      style: "currency",
      currency: OF_CURRENCY
    }).format(n);
  } catch {
    return "RM " + n.toFixed(2);
  }
};

const getLS = (k, d = []) => JSON.parse(localStorage.getItem(k) || JSON.stringify(d));
const setLS = (k, v) => localStorage.setItem(k, JSON.stringify(v));

/* ---------- Cart ---------- */
function getCart() {
  const rawCart = getLS(OF_CART_KEY);
  const allProducts = getAllProducts();
  
  // Re-hydrate cart items with latest data (like img, price, title)
  return rawCart.map(item => {
    const p = allProducts.find(x => x.id === item.id);
    if (p) {
        return { ...p, ...item }; // Merge latest p info with stored item (like qty)
    }
    return item;
  });
}

function setCart(cart) {
  // Only save ID and QTY to keep storage clean, or save full but re-hydration will fix it
  // Let's save the minimal needed to recreate it
  const minimalCart = cart.map(item => ({ id: item.id, qty: item.qty }));
  setLS(OF_CART_KEY, minimalCart);
  updateHeaderCounts();
}

function addToCart(product, qty = 1, silent = false) {
  // Normalize product: if it's an ID, find the object
  if (typeof product === 'string') {
    const found = getAllProducts().find(p => p.id === product);
    if (!found) return;
    product = found;
  }
  
  const cart = getCart();
  const i = cart.findIndex(x => x.id === product.id);
  if (i >= 0) cart[i].qty += qty;
  else cart.push({ ...product, qty });
  setCart(cart);

  if (!silent) {
    showStorePopup("Item Has Been Added To Cart");
  }
}

/* UI Popups */
function showStorePopup(message, btnText = "Continue Shopping", callback = null) {
    let popup = document.getElementById("onlyfigsPopup");
    if (!popup) {
        // Inject HTML if missing
        const html = `
            <div id="onlyfigsPopup" class="cart-popup">
                <div class="cart-popup-content">
                    <i class="fas fa-check-circle"></i>
                    <p id="popupMsg"></p>
                    <button class="popup-close-btn" id="popupBtn"></button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
        popup = document.getElementById("onlyfigsPopup");
    }

    const msgEl = document.getElementById("popupMsg");
    const btnEl = document.getElementById("popupBtn");

    msgEl.innerText = message;
    btnEl.innerText = btnText;
    
    btnEl.onclick = () => {
        popup.classList.remove("show");
        if (callback) callback();
    };

    popup.classList.add("show");
}

function updateCartQty(id, qty) {
  const cart = getCart()
    .map(x => x.id === id ? { ...x, qty } : x)
    .filter(x => x.qty > 0);
  setCart(cart);
}

function removeFromCart(id) {
  setCart(getCart().filter(x => x.id !== id));
}

function cartSubtotal() {
  return getCart().reduce((s, x) => s + x.price * x.qty, 0);
}

/* ---------- Shipping ---------- */
function getSelectedShipping() {
  const saved = localStorage.getItem(OF_SHIP_KEY);
  if (saved && OF_SHIPPING_RATES[saved]) return saved;
  return "peninsular"; // default
}

function setSelectedShipping(key) {
  if (OF_SHIPPING_RATES[key]) {
    localStorage.setItem(OF_SHIP_KEY, key);
  }
}

function getShippingCost() {
  const key = getSelectedShipping();
  return OF_SHIPPING_RATES[key].price;
}

/* ---------- Wishlist ---------- */
function getWishlist() {
  return getLS(OF_WISH_KEY);
}

function toggleWishlist(id) {
  const w = new Set(getWishlist());
  w.has(id) ? w.delete(id) : w.add(id);
  setLS(OF_WISH_KEY, [...w]);
  updateHeaderCounts();
}

function inWishlist(id) {
  return getWishlist().includes(id);
}

/* UI Helper: Toggle Heart Icon */
function toggleHeart(btn) {
  const icon = btn.querySelector("i");
  if (!icon) return;
  
  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas");
    icon.classList.add("text-danger"); // Red color
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
    icon.classList.remove("text-danger");
  }
}

/* UI Helper: Init Heart Icons on Load */
function initWishlistIcons() {
  const buttons = document.querySelectorAll(".wishlist-icon");
  const wishlist = getWishlist(); // array of IDs
  
  buttons.forEach(btn => {
    const id = btn.getAttribute("data-id");
    if (id && wishlist.includes(id)) {
        const icon = btn.querySelector("i");
        if(icon) {
            icon.classList.remove("far");
            icon.classList.add("fas");
            icon.classList.add("text-danger");
        }
    }
  });
}

// Auto-run init on load
document.addEventListener("DOMContentLoaded", initWishlistIcons);

/* ---------- Header Counters ---------- */
function updateHeaderCounts() {
  const cart = getCart();
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);
  const wishCount = getWishlist().length;

  document.querySelectorAll("[data-cart-count]")
    .forEach(el => {
      el.textContent = cartCount;
      el.style.display = cartCount > 0 ? 'flex' : 'none'; // Hide if 0
    });

  document.querySelectorAll("[data-wish-count]")
    .forEach(el => el.textContent = wishCount);
    
  updateMiniCart(cart);
}

function updateMiniCart(cart) {
  const miniCarts = document.querySelectorAll(".mini-cart");
  if (!miniCarts.length) return;

  if (cart.length === 0) {
    miniCarts.forEach(el => el.innerHTML = '<p style="text-align:center; padding:10px;">Cart is empty.</p>');
    return;
  }

  // Take top 5
  const top5 = cart.slice(0, 5);
  const others = cart.length - 5;
  
  const html = top5.map(item => `
    <div class="mc-item">
      <img src="${item.img}" alt="${item.title}">
      <div class="mc-details">
        <h4>${item.title}</h4>
        <p>${item.qty} x ${money(item.price)}</p>
      </div>
    </div>
  `).join("") + (others > 0 ? `<div class="mc-more">And ${others} more items...</div>` : '') + 
  `<div style="text-align:center; margin-top:10px;">
    <a href="cart.html" class="boxed-btn" style="padding: 5px 15px; font-size: 12px;">View Cart</a>
  </div>`;

  miniCarts.forEach(el => el.innerHTML = html);
}

/* ---------- Checkout ---------- */
function getOrders() {
  return getLS(OF_ORDER_KEY);
}

function placeOrder(customer) {
  const orders = getLS(OF_ORDER_KEY);
  orders.push({
    id: "OF-" + Date.now(),
    date: new Date().toISOString(),
    customer,
    items: getCart(),
    total: cartSubtotal()
  });
  setLS(OF_ORDER_KEY, orders);
  setCart([]); // clear cart
}

/* ---------- Init ---------- */
/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
    updateHeaderCounts();
    initChatbot();
});

/* ---------- Chatbot Logic ---------- */
function initChatbot() {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeBtn = document.querySelector(".close-btn");
    const chatbox = document.querySelector(".chatbox");
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");

    let userMessage = null; // Variable to store user's message
    const inputInitHeight = chatInput.scrollHeight;

    const createChatLi = (message, className) => {
        // Create a chat <li> element with passed message and className
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span><i class="fas fa-robot"></i></span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi; // return chat <li> element
    }

    const generateResponse = (chatElement) => {
        const messageElement = chatElement.querySelector("p");
        // Static response for now
        setTimeout(() => {
            messageElement.textContent = "Thank you for your message! Does not matter what you say, I am Lisa and I am just a demo bot right now 🤖";
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    }

    const handleChat = () => {
        userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
        if(!userMessage) return;

        // Clear the input text area and set its height to default
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;

        // Append the user's message to the chatbox
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            // Display "Thinking..." message while waiting for the response
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    }

    chatInput.addEventListener("input", () => {
        // Adjust the height of the input textarea based on its content
        chatInput.style.height = `${inputInitHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    chatInput.addEventListener("keydown", (e) => {
        // If Enter key is pressed without Shift key and the window 
        // width is greater than 800px, handle the chat
        if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
            e.preventDefault();
            handleChat();
        }
    });

    sendChatBtn.addEventListener("click", handleChat);
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
}
