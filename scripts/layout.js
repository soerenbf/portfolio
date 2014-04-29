/*
** The purpose of this script is to calculate the layout of the site in relation to window size. 
*/

//Calculate the size of div#prevWork and section#content_area to match window size.

$(document).ready(function() {

	//Init.
	resizeElements($(window).width() - $('#nav_scrollbar').width());
	layoutPrevWorkItems();

	$(window).on('resize', function(event) {
		//Resize  width of div#prevWork and section#content_area.
		resizeElements($(window).width() - $('#nav_scrollbar').width());
	});
});

var resizeElements = function(elWidth) {
	$('section#content_area').width(elWidth);
	$('div#prevWork').width(elWidth);
}

var layoutPrevWorkItems = function() {
	//Lay out the prevWork_item elements using the 'zig-zag' layout.
	var pwUpper = $('div#prevWork_items_upper');
	var pwLower = $('div#prevWork_items_lower');

	//Get portfolio data form database.
	var dataLength = 4;

	//Calculate width of div#prevWork_wrapper based on the amount of data. Every prevWork_item is 640px wide incl. margin. If the width does not exceed windowSize, 
	var dataWidth = 640 + ((dataLength - 1) * 320);
	var contentWidth = $(window).width() - $('#nav_scrollbar').width();
	$('div#prevWork_wrapper').width(dataWidth > contentWidth ? dataWidth : contentWidth);

	for (var i = 0; i < dataLength; i++) {
		//Depending on 'i', add a new div.prevWork_item to either pwUpper or pwLower.
		var pwItem = document.createElement('div');
		var parent = i % 2 === 0 ? pwUpper : pwLower;
		
		$(pwItem).addClass('prevWork_item')
			.appendTo(parent);
			//Fill in data from database.
	};
}