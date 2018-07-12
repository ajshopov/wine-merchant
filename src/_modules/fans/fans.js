'use strict';

export default class Fans {
  constructor() {
    this.name = 'fans';
    console.log('%s module', this.name.toLowerCase());
    $('.insta-reel').slick({
      centerMode: true,
      adaptiveHeight: false,
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '40px',
          }
        },
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            arrows: false,
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
}
