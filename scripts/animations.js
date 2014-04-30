var workScrollerActive = false;
var showSignOffset = 1000;

$(document).ready(function() {
	//Animation for header of prevWork_item elements.
	$('div#prevWork_item').mouseenter(function() {
		$(this).find('prevWork_item_header').animate({bottom: '100px'}, 250);
	}).mouseleave(function(){
		$(this).find('prevWork_item_header').animate({bottom: '0px'}, 250);
	});

	//To show the "click to activate" sign.
	$(window).on('scroll', function() {
		if (window.pageYOffset > showSignOffset && window.pageYOffset < showSignOffset + 200 && !workScrollerActive) {

		}
	});

	$('work_timeline_scroller').on('click', function() {
		console.log(1);
	});
});