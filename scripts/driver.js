$(document).ready(function() {

	var backendUrl = '/blog_backend/index.php';

	//Init.
	window.activeCategories = []; //Array to hold categories when filtering is enabled.

	window.layoutManager = new LayoutManager(); //LayoutManager.js
	window.scrollManager = new ScrollManager(); //ScrollManager.js
	window.animationManager = new AnimationManager(); //AnimationManager.js

	window.ajaxComm = new AjaxCommunicator(backendUrl); //AjaxCommunicator.js

	//Get the items from the backend.
	ajaxComm.getPortfolio(layoutManager.layoutPortfolio);
	ajaxComm.getSkills(layoutManager.layoutSkillsSection);

	/* ---------------- Global document wide event handling. ---------------- */
	$(window).on('resize', function(event) {
		layoutManager.updateLayout();
		scrollManager.handleScroll();
	}).on('scroll', function(event) {
		scrollManager.handleScroll(event);
	});

	/* ---------------- Local event handling. ---------------- */
	//Show description when hovering over items in the portfolio.
	$("#prev_work_items_wrapper").on('mouseenter', '.prev_work_item',function() {
		animationManager.togglePrevWorkItemDescription($(this), true);
	}).on('mouseleave', '.prev_work_item',function() {
		animationManager.togglePrevWorkItemDescription($(this), false);
	});

	$("#skills").on('mouseenter', '.skill',function() {
		animationManager.toggleAnimatingBackground($(this), true);
		animationManager.toggleSkillDescription($(this), true);
	}).on('mouseleave', '.skill',function() {
		animationManager.toggleAnimatingBackground($(this), false);
		animationManager.toggleSkillDescription($(this), false);
	});

	//Enable filtering on categories when clicking them.
});
