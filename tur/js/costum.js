



// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: '.gutter-sizer',
    percentPosition: true
  }); 
});



