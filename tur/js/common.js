$(function() {

/*Slider Top options*/
$(document).ready(function(){
    $('.sliderblock').slick({
        autoplay: false,
        autoplaySpeed: 0,
        arrows: true,
        dots: true,
 				slidesToShow: 3,
 				slidesToScroll: 3,
 				prevArrow: '<i class="fas fa-angle-left slider-icons-l"></i>', 
        nextArrow: '<i class="fas fa-angle-right slider-icons-r"></i>',
  
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
