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
  new Swiper("#primary-swiper", {
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

document.addEventListener('DOMContentLoaded', () => {
  // 1. 暫存所有原始 slides 的 HTML（outerHTML）
  const swiperEl = document.getElementById('second-swiper');
  const originalSlides = Array.from(
    swiperEl.querySelectorAll('.circle-section__slide')
  ).map(slide => slide.outerHTML);

  // 2. 初始化 Swiper
  const swiper = new Swiper('#second-swiper', {
    slidesPerView: 2,
    watchOverflow: true,
    loop: true,
    spaceBetween: 24,
    navigation: {
      prevEl: '#second-swiper .circle-section__nav--prev',
      nextEl: '#second-swiper .circle-section__nav--next',
    },
    breakpoints: {
      0: {
        slidesPerView: 'auto',
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

  // 生活圈篩選功能
  const filters = document.querySelectorAll('.circle-section__filter');
  filters.forEach(filter => {
    filter.addEventListener('click', e => {
      e.preventDefault();

      filters.forEach(f => f.classList.remove('is-active'));
      filter.classList.add('is-active');

      const selectedCat = filter.dataset.cat;
      const filtered = (selectedCat === 'all')
        ? originalSlides
        : originalSlides.filter(html => html.includes(`data-cat="${selectedCat}"`));
      if (swiper.params.loop) {
        swiper.loopDestroy();
      }
      swiper.removeAllSlides();
      swiper.appendSlide(filtered);
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.slideToLoop(0);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".activities-section__grid");
  const btn  = document.querySelector(".activities-section__toggle");

  btn.addEventListener("click", () => {
    const expanded = grid.classList.toggle("is-expanded");
    btn.classList.toggle("expanded", expanded);
    btn.firstChild.textContent = expanded ? "收起" : "查看更多";
  });
});

