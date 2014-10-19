$(document).ready(function() {

	var backendUrl = '/blog_backend/index.php';

	//Init.
	var layoutManager = new LayoutManager(); //LayoutManager.js
	var scrollManager = new ScrollManager(); //ScrollManager.js
	var ajaxComm = new AjaxCommunicator(backendUrl, layoutManager.layoutPortfolio); //AjaxCommunicator.js
	var animationManager = new AnimationManager();

	//Get the items from the backend.
	ajaxComm.getPortfolio();

	//Global document wide event handling.
	$(window).on('resize', function(event) {
		layoutManager.layoutElements();
		scrollManager.handleScroll();
	}).on('scroll', function(event) {
		scrollManager.handleScroll(event);
	});

	//Local event handling.
	//Show description when hovering over items in the portfolio.
	$(".prev_work_item").hover(animationManager.togglePrevWorkItemDescription($(this), true), animationManager.togglePrevWorkItemDescription($(this), false));
});
