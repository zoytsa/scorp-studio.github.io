$(".sliderblock").slick({

  // normal options...
  infinite: false,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,


  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});
