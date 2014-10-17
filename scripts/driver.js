$(document).ready(function() {

	var backendUrl = '/blog_backend/index.php';

	//Init.
	var layoutManager = new LayoutManager(); //LayoutManager.js
	var scrollManager = new ScrollManager(); //ScrollManager.js
	var ajaxComm = new AjaxCommunicator(backendUrl, layoutManager.layoutPortfolio); //AjaxCommunicator.js

	//Get the items from the backend.
	ajaxComm.getPortfolio();

	$(window).on('resize', function(event) {
		layoutManager.resizeElements($(window).width() - $('#nav_scroll_bar').width());
		scrollManager.handleScroll();
	}).on('scroll', function(event) {
		scrollManager.handleScroll(event);
	});
});
