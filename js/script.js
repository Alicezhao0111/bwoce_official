const toggleBtn = document.getElementById("mobileToggleBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburgerIcon");
let menuOpen = false;

toggleBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("mobile-menu-active", menuOpen);
  hamburger.classList.toggle("open", menuOpen);
});

document.addEventListener("click", (event) => {
  if (
    menuOpen &&
    !mobileMenu.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    mobileMenu.classList.remove("mobile-menu-active");
    hamburger.classList.remove("open");
    menuOpen = false;
  }
});

document.querySelectorAll(".toggle-password").forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    icon.src =
      type === "text"
        ? "./images/login/eye_open_icon.svg"
        : "./images/login/eye_icon.svg";
  });
});

function showModal(message) {
  document.getElementById("modalMessage").innerHTML = message;
  document.getElementById("globalModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("globalModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  function countUp(el, duration = 1000) {
    const target = +el.dataset.target;
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      }
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
    {
      root: null,
      threshold: 0.3, // 預留 30% 進畫面就觸發
    }
  );

  numbers.forEach((n) => observer.observe(n));
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".js-primary-swiper", {
    slidesPerView: 2,
    watchOverflow: true,
    loop: true,
    spaceBetween: 24,
    navigation: {
      prevEl: ".js-primary-swiper .circle-section__nav--prev",
      nextEl: ".js-primary-swiper .circle-section__nav--next",
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
        centeredSlides: false,
        slidesOffsetBefore: 8,
      },
      768: {
         slidesOffsetBefore: 24,
      },
      920: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        centeredSlides: false,
        roundLengths: true, 
        spaceBetween: 48,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".js-second-swiper", {
    slidesPerView: 2,
    watchOverflow: true,
    loop: false,
    spaceBetween: 24,
    navigation: {
      prevEl: ".js-primary-swiper .circle-section__nav--prev",
      nextEl: ".js-primary-swiper .circle-section__nav--next",
    },
    breakpoints: {
      // 手機版：auto + center，露 1.3 張
      0: {
        slidesPerView: "auto",
        centeredSlides: false,
        slidesOffsetBefore: 8,
      },
      // 桌機版 ≥786px：一次 2 張、滑 2 張，左右各推 40px
      786: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        centeredSlides: false,
        spaceBetween: 24,
      },
    },
  });
});

