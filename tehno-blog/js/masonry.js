$(window).on('load', function(){
	$('.news__container').masonry({
			columnWidth: '.news__block',
			itemSelector: '.news__block'
});
});