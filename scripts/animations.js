$(document).ready(function() {
	//Animation for header of prevWork_item elements.
	$('div#prevWork_item').mouseenter(function() {
		$(this).find('prevWork_item_header').animate({bottom: '100px'}, 250);
	}).mouseleave(function(){
		$(this).find('prevWork_item_header').animate({bottom: '0px'}, 250);
	});
});