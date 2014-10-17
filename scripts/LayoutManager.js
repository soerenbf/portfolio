var LayoutManager = (function() {
	return function() {

		var workArray;

		var layoutPortfolio = function(workItems) {
			//Lay out the prev_work_item elements using the 'zig-zag' layout.
			var pwUpper = $('div#prev_work_items_upper');
			var pwLower = $('div#prev_work_items_lower');

			for (var i = 0; i < workItems.length; i++) {
				//Depending on 'i', add a new div.prev_work_item to either pwUpper or pwLower.
				var pwItem = document.createElement('div');
				var parent = i % 2 === 0 ? pwUpper : pwLower;

				$(pwItem).addClass('prev_work_item')
					.appendTo(parent);
					//Fill in data from workItems.
				console.log(workItems[i]);
			};

			workArray = workItems;

			resizeElements($(window).width() - $('#nav_scrollbar').width());
		}

		var resizeElements = function(elWidth) {
			//Resize  width of div#prev_work and section#content_area.
			$('section#content_area').width(elWidth);
			$('div#prev_work').width(elWidth);

			//Calculate width of div#prev_work_items_wrapper based on the amount of data. Every prev_work_item is 640px wide incl. margin. If the width does not exceed windowSize,
			var dataWidth = 640 + ((workArray.length - 1) * 320);
			var contentWidth = $(window).width() - $('#nav_scrollbar').width();
			$('div#prev_work_items_wrapper').width(dataWidth > contentWidth ? dataWidth : contentWidth);

			//Resize #header_wrapper to match the screen size.
			$('div#header_wrapper').height($(window).height());

			//Position the #work_timeline_scroller correctly. Position:absolute.
			$('#work_timeline_scroller').css('top', $('div#header_wrapper').height() + ($('div#prev_work').height() / 2) - ($('div#prev_work_header').height() / 2)); //Position it in the middle of #prev_work_items_wrapper.
		}

		//Exports
		this.layoutPortfolio = layoutPortfolio;
		this.resizeElements = resizeElements;
	}
})();
