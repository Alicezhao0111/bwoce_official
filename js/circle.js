document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.circle-page__carousel', {
    loop: true,
    pagination: {
      el: '.circle-page__pagination',
      clickable: true,
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
   new Swiper("#circle-event-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 8,
    navigation: {
      prevEl: "#circle-event-swiper .circle-section__nav--prev",
      nextEl: "#circle-event-swiper .circle-section__nav--next",
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 24,
        slidesOffsetBefore: 10,
      },
      1120: {
        slidesOffsetBefore: 8,
      }
      

    },
  });
});


