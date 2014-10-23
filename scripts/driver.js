$(document).ready(function() {

	var backendUrl = '/blog_backend/index.php';

	//Init.
	window.layoutManager = new LayoutManager(); //LayoutManager.js

	window.scrollManager = new ScrollManager(); //ScrollManager.js
	window.animationManager = new AnimationManager();

	window.ajaxComm = new AjaxCommunicator(backendUrl, layoutManager.layoutPortfolio); //AjaxCommunicator.js

	//Get the items from the backend.
	ajaxComm.getPortfolio();

	//Global document wide event handling.
	$(window).on('resize', function(event) {
		layoutManager.updateLayout();
		scrollManager.handleScroll();
	}).on('scroll', function(event) {
		scrollManager.handleScroll(event);
	});

	//Local event handling.
	//Show description when hovering over items in the portfolio.
	$("#prev_work_items_wrapper").on('mouseenter', '.prev_work_item',function() {
		animationManager.togglePrevWorkItemDescription($(this), true);
	}).on('mouseleave', '.prev_work_item',function() {
		animationManager.togglePrevWorkItemDescription($(this), false);
	});
});
