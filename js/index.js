new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'cards',
  cardsEffect: {
  slidesPerView: 1,
  spaceBetween: 10,
},
      
  //   breakpoints: {
  //   1440: {
  //       slidesPerView: 1,
  //       grid: {
  //           fill: 'row',
  //           rows: 1
  //         }        
  //       }
  // }
});
