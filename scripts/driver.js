$(document).ready(function() {

	//Maybe move these to a model class?
	var workItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	//Init.
	var layoutManager = new LayoutManager(workItems); //LayoutManager.js
	var scrollManager = new ScrollManager(); //ScrollManager.js

	$(window).on('resize', function(event) {
		layoutManager.resizeElements($(window).width() - $('#nav_scrollbar').width());
		scrollManager.scrollNav();
	}).on('scroll', function(event) {
		scrollManager.handleScroll(event);
	});
});