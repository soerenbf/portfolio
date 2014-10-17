var LayoutManager = (function() {
	return function() {

		var workArray;

		var layoutPortfolio = function(workItems) {
			//Lay out the prevWork_item elements using the 'zig-zag' layout.
			var pwUpper = $('div#prevWork_items_upper');
			var pwLower = $('div#prevWork_items_lower');

			for (var i = 0; i < workItems.length; i++) {
				//Depending on 'i', add a new div.prevWork_item to either pwUpper or pwLower.
				var pwItem = document.createElement('div');
				var parent = i % 2 === 0 ? pwUpper : pwLower;

				$(pwItem).addClass('prevWork_item')
					.appendTo(parent);
					//Fill in data from workItems.
				console.log(workItems[i]);
			};

			workArray = workItems;

			resizeElements($(window).width() - $('#nav_scrollbar').width());
		}

		var resizeElements = function(elWidth) {
			//Resize  width of div#prevWork and section#content_area.
			$('section#content_area').width(elWidth);
			$('div#prevWork').width(elWidth);

			//Calculate width of div#prevWork_wrapper based on the amount of data. Every prevWork_item is 640px wide incl. margin. If the width does not exceed windowSize,
			var dataWidth = 640 + ((workArray.length - 1) * 320);
			var contentWidth = $(window).width() - $('#nav_scrollbar').width();
			$('div#prevWork_wrapper').width(dataWidth > contentWidth ? dataWidth : contentWidth);
		}

		//Exports
		this.layoutPortfolio = layoutPortfolio;
		this.resizeElements = resizeElements;
	}
})();
