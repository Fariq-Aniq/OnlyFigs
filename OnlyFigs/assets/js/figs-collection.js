document.addEventListener("DOMContentLoaded", () => {
  // Sidebar collapse toggles
  document.querySelectorAll("[data-collapse]").forEach(btn => {
    btn.addEventListener("click", () => {
      const wrap = btn.closest(".side-block");
      wrap.classList.toggle("collapsed");
    });
  });

  // Grid view toggles
  const grid = document.querySelector("[data-products-grid]");
  const btn3 = document.querySelector("[data-view='3']");
  const btn4 = document.querySelector("[data-view='4']");
  if(grid && btn3 && btn4){
    const setView = (cols) => {
      btn3.classList.toggle("active", cols === 3);
      btn4.classList.toggle("active", cols === 4);
      grid.classList.toggle("cols-4", cols === 4);
    };
    btn3.addEventListener("click", () => setView(3));
    btn4.addEventListener("click", () => setView(4));
    setView(3);
  }

  // Fake filter highlight (UI only)
  document.querySelectorAll(".side-list li").forEach(li => {
    li.addEventListener("click", () => {
      li.parentElement.querySelectorAll("li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
    });
  });
});
