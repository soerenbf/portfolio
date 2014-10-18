var ScrollManager = (function(x, y, scrollingNav, prevWork, workScrollerEl) {
	return function() {

		var showSignOffset = 1000;
		var showSignInterval = 200;

		var workScroller;
		var scrollingNav;

		var init = function() {
			workScroller = new WorkScroller(handleWorkScroll);
			scrollingNav = new ScrollingNav();
		}

		var handleScroll = function(scrollEvent) {
			//Scroll the scrolling nav, scroll the header upwards slowly, and check if the sign to click workscroller should be shown.
			scrollingNav.updateScroller();
			$('#header_wrapper').height($(window).height() - window.pageYOffset);
			toggleSign(y > showSignOffset && y < showSignOffset + showSignInterval && workScroller.getClicks() === 0);
		}

		var toggleSign = function(shouldToggle) {
			if (shouldToggle) {
				//Show the sign telling the user to click the work scroller.
			}
		}

		var handleWorkScroll = function(event) { //Sent to workScroller -> workScroller.scrollDisabler as a callback.
			workScroller.scrollDirection(event.originalEvent.wheelDelta >= 0);
		}

		init();

		//Exports.
		this.handleScroll = handleScroll;
	}
})(window.pageXOffset, window.pageYOffset, $('#scrolling_nav_wrapper'), $('#prev_work_items_wrapper'), $('#work_timeline_scroller'));
