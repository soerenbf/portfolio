var ScrollManager = (function() {
	return function() {

		var workScrollerClicks;

		var init = function() {
			workScrollerClicks = 0;

			//Exports.
			this.incrementWorkScrollerCLicks = incrementWorkScrollerCLicks;
			this.handleScroll = handleScroll;
			this.scrollNav = scrollNav;
		}

		

		var incrementWorkScrollerCLicks = function() {
			workScrollerClicks = workScrollerClicks + 1;
		}

		var handleScroll = function(event) {
			scrollNav();
		}

		var scrollNav = function() {
			var pageScrollMax = $('#content_area').height() - $('body').height();
			var amountScrolled = (1 - (pageScrollMax - window.pageYOffset) / pageScrollMax);

			$('#scrolling_nav_wrapper').css('top', ($('body').height() - $('#scrolling_nav_wrapper').height()) * amountScrolled);
		}
	}
})();