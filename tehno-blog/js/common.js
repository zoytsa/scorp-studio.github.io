$(function() {

$(".slider").slick({

  // normal options...
  infinite: true,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        autoplay: false,
      }
    }
  ]
 
});


 $("#my-menu").mmenu({
 		extensions: ['widescreen', 'theme-dark', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		 navbar: {
			title: '<img src="img/logom.png" alt="logo" />'
    }
    
 });


/*бургер меню*/
$('.hamburger').click(function(){
  $('.hamburger').toggleClass('is-active');
});
$(document).click(function(event) {
  if ($(event.target).closest(".hamburger").length ) return;
  $('.hamburger').removeClass('is-active');
  event.stopPropagation();
});




 
});


