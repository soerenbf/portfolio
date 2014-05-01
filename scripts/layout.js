/*
** The purpose of this script is to calculate the layout of the site in relation to window size. 
*/

//Calculate the size of div#prevWork and section#content_area to match window size.

$(document).ready(function() {

	//Init.
	layoutPrevWorkItems();

	$(window).on('resize', function(event) {
		//Resize  width of div#prevWork and section#content_area.
		resizeElements($(window).width() - $('#nav_scrollbar').width());
		scrollNav();
	}).on('scroll', function() {
		scrollNav();
	});
});

var data = [];

//Resizing
var resizeElements = function(elWidth) {
	$('section#content_area').width(elWidth);
	$('div#prevWork').width(elWidth);

	//Calculate width of div#prevWork_wrapper based on the amount of data. Every prevWork_item is 640px wide incl. margin. If the width does not exceed windowSize, 
	var dataWidth = 640 + ((data.length - 1) * 320);
	var contentWidth = $(window).width() - $('#nav_scrollbar').width();
	$('div#prevWork_wrapper').width(dataWidth > contentWidth ? dataWidth : contentWidth);
}

var layoutPrevWorkItems = function() {
	//Lay out the prevWork_item elements using the 'zig-zag' layout.
	var pwUpper = $('div#prevWork_items_upper');
	var pwLower = $('div#prevWork_items_lower');

	//Get portfolio data form database.
	data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	for (var i = 0; i < data.length; i++) {
		//Depending on 'i', add a new div.prevWork_item to either pwUpper or pwLower.
		var pwItem = document.createElement('div');
		var parent = i % 2 === 0 ? pwUpper : pwLower;
		
		$(pwItem).addClass('prevWork_item')
			.appendTo(parent);
			//Fill in data from database.
	};

	resizeElements($(window).width() - $('#nav_scrollbar').width());
}

//Scrolling
var scrollNav = function() {
	var pageScrollMax = $('#content_area').height() - $('body').height();
	var amountScrolled = (1 - (pageScrollMax - window.pageYOffset) / pageScrollMax);

	$('#scrolling_nav_wrapper').css('top', ($('body').height() - $('#scrolling_nav_wrapper').height()) * amountScrolled);
}