var LayoutManager = (function() {
	return function() {

		var workArray;
		var firstLoad = true;

		var layoutPortfolio = function(workItems) {
			//Lay out the prev_work_item elements using the 'zig-zag' layout.
			var pwUpper = $('div#prev_work_items_upper');
			var pwLower = $('div#prev_work_items_lower');

			for (var i = 0; i < workItems.length; i++) {
				//Set parent to lower/upper depending on odd or even number.
				var parent = i % 2 === 0 ? pwUpper : pwLower;
				$(_makePortfolioItem(workItems[i])).appendTo(parent);
			}

			changeThemeColor(workItems[0]['color_hex'], !firstLoad);
			firstLoad = false;

			workArray = workItems;

			updateLayout();
		}

		var layoutSkillsSection = function(skills) {
			var parent = $('div#skills');

			for (var i = 0; i < skills.length; i++) {
				$(_makeSkillSection(skills[i])).appendTo(parent);
			}

			if(workArray) {
				updateLayout();
			}
		}

		var _makePortfolioItem = function(portfolioItem) {
			//Depending on 'i', add a new div.prev_work_item to either pwUpper or pwLower.
			var pwItem = document.createElement('div');
			$(pwItem).addClass('prev_work_item');
				//Fill in data from workItems.
				//Header.
				var pwItemHeader = document.createElement('h1');
				pwItemHeader.innerHTML = '<a href="#">' + portfolioItem['title'] + '</a>';
				$(pwItemHeader).appendTo(pwItem);

				//Category icon.
				var pwCatIcon = document.createElement('div');
				$(pwCatIcon).addClass('pw_item_category_icon').appendTo(pwItem);

				//Work item teaser.
				var pwItemTeaser = document.createElement('div');
				$(pwItemTeaser).addClass('pw_item_teaser').appendTo(pwItem);

				//Add the data to the teaser element: item description(tags, description), info(date, software used).
				//Info
				var pwItemInfo = document.createElement('div');
				$(pwItemInfo).addClass('pw_item_info').appendTo(pwItemTeaser);

					var pwItemDate = document.createElement('div');
					$(pwItemDate).addClass('pw_item_date').appendTo(pwItemInfo);

					var pwItemSoftware = document.createElement('div');
					$(pwItemSoftware).addClass('pw_item_software').appendTo(pwItemInfo);

				//Description
				var pwItemDesc = document.createElement('div');
				$(pwItemDesc).addClass('pw_item_description').appendTo(pwItemTeaser);

					var pwItemTags = document.createElement('div');
					$(pwItemTags).addClass('pw_item_tags').appendTo(pwItemDesc);

					var pwItemDescText = document.createElement('div');
					$(pwItemDescText).addClass('pw_item_description_text').appendTo(pwItemDesc);

			//Add data to element.
			$(pwItem).attr('id', 'portfolio_post_' + portfolioItem['id']);
			$(pwItem).attr('data-color', portfolioItem['color_hex']);

			return pwItem;
		}

		var _makeSkillSection = function(skillsByCategory) {
			console.log(skillsByCategory);

			/*<div id="<id_name>" class="skill_category">
				<h2>
					<category_name> >
				</h2>
			</div>*/


		}

		var updateLayout = function() {
			//Resize #header_wrapper to match the screen size and set min-height attribute.
			$('#background').height($(window).height() - window.pageYOffset);
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
		this.layoutSkillsSection = layoutSkillsSection;
		this.updateLayout = updateLayout;
		this.changeThemeColor = changeThemeColor;

	}
})();
