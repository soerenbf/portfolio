/*
** The purpose of this script is to calculate the layout of the site in relation to window size. 
*/

//Calculate the size of div#prevWork and section#content_area to match window size.

$(document).ready(function() {

	var workItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	//Init.
	var layoutManager = new LayoutManager(workItems); //LayoutManager.js
	var scrollManager = new ScrollManager();

	$(window).on('resize', function(event) {
		layoutManager.resizeElements($(window).width() - $('#nav_scrollbar').width());
		scrollManager.scrollNav();
	}).on('scroll', scrollManager.handleScroll);
});

//Scrolling
var scrollNav = function() {
	var pageScrollMax = $('#content_area').height() - $('body').height();
	var amountScrolled = (1 - (pageScrollMax - window.pageYOffset) / pageScrollMax);

	$('#scrolling_nav_wrapper').css('top', ($('body').height() - $('#scrolling_nav_wrapper').height()) * amountScrolled);
}