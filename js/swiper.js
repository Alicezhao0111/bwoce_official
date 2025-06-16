// index
function initHeroSwiper() {
  const swiper = new Swiper(".js-hero-swiper", {
    loop: true,
    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
    lazy: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  function onSlideChange() {
    const slide = swiper.slides[swiper.activeIndex];
    const video = slide.querySelector("video");
    swiper.slides.forEach((s) => s.classList.remove("hero__slide--masked"));

    if (video) {
      swiper.autoplay.stop();
      slide.classList.add("hero__slide--masked");
      video.currentTime = 0;
      video.play();
      video.onended = () => swiper.slideNext();
    } else {
      swiper.autoplay.start();
    }
  }

  swiper.on("slideChange", onSlideChange);
  onSlideChange();
}

function initPrimarySwiper() {
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
      768: { slidesOffsetBefore: 24 },
      920: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        centeredSlides: false,
        roundLengths: true,
        spaceBetween: 48,
      },
    },
  });
}

function initFilterSwiper() {
  const swiperEl = document.getElementById("second-swiper");
  const originalSlides = Array.from(
    swiperEl.querySelectorAll(".circle-section__slide")
  ).map((slide) => slide.outerHTML);

  const swiper = new Swiper("#second-swiper", {
    slidesPerView: 2,
    watchOverflow: true,
    loop: true,
    spaceBetween: 24,
    navigation: {
      prevEl: "#second-swiper .circle-section__nav--prev",
      nextEl: "#second-swiper .circle-section__nav--next",
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
        centeredSlides: false,
        slidesOffsetBefore: 8,
      },
      768: { slidesOffsetBefore: 24 },
      920: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        centeredSlides: false,
        roundLengths: true,
        spaceBetween: 48,
      },
    },
  });

  document.querySelectorAll(".circle-section__filter").forEach((filter) => {
    filter.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".circle-section__filter")
        .forEach((f) => f.classList.remove("is-active"));
      filter.classList.add("is-active");

      const cat = filter.dataset.cat;
      const filtered =
        cat === "all"
          ? originalSlides
          : originalSlides.filter((html) => html.includes(`data-cat="${cat}"`));

      if (swiper.params.loop) swiper.loopDestroy();
      swiper.removeAllSlides();
      swiper.appendSlide(filtered);
      if (swiper.params.loop) swiper.loopCreate();
      swiper.slideToLoop(0);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroSwiper();
  initPrimarySwiper();
  initFilterSwiper();
});
