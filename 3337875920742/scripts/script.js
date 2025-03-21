const swiper = new Swiper('#es-rc #es-rc-content .es-swiper--1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.es-swiper-pagination',
  },

  navigation: {
    nextEl: '.es-swiper-button-next',
    prevEl: '.es-swiper-button-prev',
  },
});
