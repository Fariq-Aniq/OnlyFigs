// Figs Cart (localStorage) for OnlyFigs template
const CART_KEY = "figs_cart_v1";

// change these
const FREE_SHIPPING = 80;     // e.g. RM80
const CURRENCY = "MYR";       // "MYR" or "USD"

const fmt = (n) => {
  try { return new Intl.NumberFormat(undefined, { style:"currency", currency:CURRENCY }).format(n); }
  catch { return "RM " + n.toFixed(2); }
};

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const setCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

function addToCart(item, qty = 1){
  const cart = getCart();
  const i = cart.findIndex(x => x.id === item.id);
  if(i >= 0) cart[i].qty += qty;
  else cart.push({ ...item, qty });
  setCart(cart);
}

function changeQty(id, nextQty){
  const cart = getCart()
    .map(x => x.id === id ? ({...x, qty: nextQty}) : x)
    .filter(x => x.qty > 0);
  setCart(cart);
  renderCart();
}

function removeItem(id){
  setCart(getCart().filter(x => x.id !== id));
  renderCart();
}

function calcSubtotal(cart){
  return cart.reduce((sum, x) => sum + (x.price * x.qty), 0);
}

function renderShipping(subtotal){
  const remaining = Math.max(0, FREE_SHIPPING - subtotal);
  const pct = Math.min(100, (subtotal / FREE_SHIPPING) * 100);

  const bar = document.querySelector("[data-ship-bar]");
  const text = document.querySelector("[data-ship-text]");

  if(bar) bar.style.width = (isFinite(pct) ? pct : 0) + "%";

  if(!text) return;
  if(remaining > 0) text.textContent = `Spend ${fmt(remaining)} more and get free shipping!`;
  else text.textContent = `Congratulations, you’ve got free shipping!`;
}

function renderCart(){
  const cart = getCart();
  const itemsEl = document.querySelector("[data-cart-items]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  const countEl = document.querySelector("[data-cart-count]");

  if(!itemsEl) return;

  const subtotal = calcSubtotal(cart);
  if(subtotalEl) subtotalEl.textContent = fmt(subtotal);

  const totalQty = cart.reduce((s, x) => s + x.qty, 0);
  if(countEl) countEl.textContent = `${totalQty} item${totalQty === 1 ? "" : "s"}`;

  renderShipping(subtotal);

  if(cart.length === 0){
    itemsEl.innerHTML = `<div class="figs-empty">Your cart is empty. Go pick some figs 🍈</div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(x => `
    <div class="figs-item">
      <div class="figs-img">
        <img src="${x.img || ""}" alt="${(x.title || "").replaceAll('"',"&quot;")}">
      </div>

      <div>
        <p class="figs-name">${x.title || ""}</p>
        <p class="figs-variant">${x.variant || ""}</p>

        <div class="figs-row">
          <div class="figs-qty">
            <button type="button" onclick="changeQty('${x.id}', ${x.qty - 1})">-</button>
            <input type="text" value="${x.qty}" readonly>
            <button type="button" onclick="changeQty('${x.id}', ${x.qty + 1})">+</button>
          </div>

          <div class="figs-price">${fmt(x.price * x.qty)}</div>
        </div>

        <button class="figs-remove" type="button" onclick="removeItem('${x.id}')">Remove</button>
      </div>

      <div></div>
    </div>
  `).join("");
}

// Run on cart page
document.addEventListener("DOMContentLoaded", () => {
  if(document.querySelector("[data-cart-page]")) renderCart();
});
