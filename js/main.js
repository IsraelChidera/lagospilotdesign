/* Swiper Js carousels */
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var mySwiper = new Swiper ('.swiper-container');
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});