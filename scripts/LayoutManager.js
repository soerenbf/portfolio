var LayoutManager = (function() {
	return function() {

		var workArray;
		var firstLoad = true;

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
					pwItemHeader.innerHTML = '<a href="#">' + workItems[i]['title'] + '</a>';
					$(pwItemHeader).appendTo(pwItem);

					//Work item teaser.
					var pwItemTeaser = document.createElement('div');
					$(pwItemTeaser).addClass('pw_item_teaser')
						.appendTo(pwItem);

					//Add the data to the teaser element: item description, software used, tags, category_name.

					//Add data to element.
					$(pwItem).attr('id', 'portfolio_post_' + workItems[i]['id']);
					$(pwItem).attr('data-color', workItems[i]['color_hex']);
			};

			changeThemeColor(workItems[0]['color_hex'], !firstLoad);
			firstLoad = false;

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
			var textIndent = $(window).width() > $('.container_16').width() ? (($(window).width() - $('.container_16').width()) / 2) : 0;
			$('.indented').css('left', textIndent);
			//Resize swift-like headers to fit the screen.
			$('.indented').width($(window).width() - textIndent);

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

		var changeThemeColor = function(color, animated) {
			window.themeColor = color;

			//All elements that need the color changed.
			$('#header_wrapper').css('background-color', themeColor); //Change background-color.
			$('#nav_scroll_bar').css('background-color', themeColor); //Change background-color.
			$('#work_timeline_scroller').css('border-color', themeColor).css('color', themeColor); //Change border-color and color.

			if ($('#work_timeline_scroller').hasClass('active')) {
				$('#work_timeline_scroller').css({
					'background-color' : themeColor,
					'color' : '#ecf0f1'
				});
			}
		}

		//Exports
		this.layoutPortfolio = layoutPortfolio;
		this.updateLayout = updateLayout;
		this.changeThemeColor = changeThemeColor;

	}
})();
