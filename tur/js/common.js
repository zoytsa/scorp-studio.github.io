$(function() {

/*Slider Top options*/
$(document).ready(function(){
    $('.sliderblock').slick({
        autoplay: false,
        autoplaySpeed: 0,
        arrows: true,
        dots: false,
 				slidesToShow: 3,
 				slidesToScroll: 3,
          responsive: [

    {
      breakpoint: 680,
      settings: {
    dots: false,
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

});
