document.addEventListener("DOMContentLoaded", () => {
  // 1. 數字動畫
  function countUp(el, duration = 1000) {
    const target = +el.dataset.target;
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const numbers = document.querySelectorAll(".stats__number");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  numbers.forEach((n) => observer.observe(n));

  // 2. 活動區塊-展開/收合
  const grid = document.querySelector(".activities-section__grid");
  const btn = document.querySelector(".activities-section__toggle");
  const more = btn.querySelector(".toggle-text--more");
  const less = btn.querySelector(".toggle-text--less");

  btn.addEventListener("click", () => {
    const expanded = grid.classList.toggle("is-expanded");
    btn.classList.toggle("expanded", expanded);

    more.hidden = expanded;
    less.hidden = !expanded;
  });
});
