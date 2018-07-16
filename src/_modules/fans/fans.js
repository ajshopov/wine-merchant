'use strict';

export default class Fans {
  constructor() {
    this.name = 'fans';
    console.log('%s module', this.name.toLowerCase());
    $('.insta-reel').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
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
