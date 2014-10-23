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
					//Header.
					var pwItemHeader = document.createElement('h1');
					pwItemHeader.innerHTML = '<a href="#">' + 'Awesome project '+ (i + 1) + '</a>';
					$(pwItemHeader).appendTo(pwItem);

					//Work item description.
					var pwItemDesc = document.createElement('div');
					$(pwItemDesc).addClass('pw_item_description')
						.appendTo(pwItem);
			};

			workArray = workItems;

			updateLayout();
		}

		var updateLayout = function() {
			//Resize #header_wrapper to match the screen size and set min-height attribute.
			$('#background').height($(window).height());
			$('#header_wrapper').css('min-height', $('#header')
				.height() + 2 * $('#nav_scroll_bar').height());

			//Position the nav_scroll_bar above content area.
			$('#nav_scroll_bar').css('top', $(window).height() - $('#nav_scroll_bar').height());

			//Indent headers to be indented; elements with .indented.
			$('.indented').css('text-indent', $(window).width() > $('.container_16').width() ? (($(window).width() - $('.container_16').width()) / 2) : 0)

			//Resize  width of div#prev_work and section#content_area.
			$('section#content_area').width($(window).width())
				.css('top', $(window).height());
			$('div#prev_work').width($(window).width());

			//Calculate width of div#prev_work_items_wrapper based on the amount of data. Every prev_work_item is 640px wide incl. margin. If the width does not exceed windowSize,
			var dataWidth = 640 + ((workArray.length - 1) * 320);
			var contentWidth = $(window).width();
			$('div#prev_work_items_wrapper').width(dataWidth > contentWidth ? dataWidth : contentWidth);

			//Position the #work_timeline_scroller correctly. Position:absolute.
			$('#work_timeline_scroller').css('top', ($('div#prev_work_items_wrapper').height() / 2) + $('#prev_work_header').outerHeight(true) - ($('#work_timeline_scroller').outerHeight(true) / 2)); //Position it in the middle of #prev_work_items_wrapper.
		}

		//Exports
		this.layoutPortfolio = layoutPortfolio;
		this.updateLayout = updateLayout;
	}
})();
