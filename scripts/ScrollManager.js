var ScrollManager = (function(x, y, scrollingNav, prevWork, workScrollerEl) {
	return function() {

		var showSignOffset = 1000;
		var showSignInterval = 200;
		
		var workScroller;

		var init = function() {
			workScroller = new WorkScroller(handleWorkScroll);
		}

		var handleScroll = function(scrollEvent) {
			scrollNav();
			toggleSign(y > showSignOffset && y < showSignOffset + showSignInterval && workScroller.getClicks() === 0);
		}

		var scrollNav = function() {
			var pageScrollMax = $('#content_area').height() - $('body').height();
			var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

			scrollingNav.css('top', ($('body').height() - scrollingNav.height()) * pageAmountScrolled);
		}

		var toggleSign = function(shouldToggle) {
			if (shouldToggle) {
				//Show the sign telling the user to click the work scroller.
			}
		}

		var handleWorkScroll = function(event) { //Sent to workScroller -> workScroller.scrollDisabler as a callback.
			//Calculate how much to scroll the prevWork area.
			var scrollSpeed = 10;
			var scrollValue = event.originalEvent.wheelDelta >= 0 ? scrollSpeed : -scrollSpeed;

			if (prevWork.position().left + scrollValue >= (prevWork.width() - $(window).width() + 150) * -1 && prevWork.position().left + scrollValue <= 0) {
				scrollWork(prevWork.position().left + scrollValue);
			}
		}

		var scrollWork = function(newPos) {
			//Scroll prevWork.
			prevWork.css('left', newPos);

			//Scroll workScroller accordingly.
			var workScrollMax = prevWork.width() - $(window).width() + 150;
			var workAmountScrolled = 1 - (newPos + workScrollMax) / workScrollMax;

			workScrollerEl.css('left', workScroller.getStartPos() + workAmountScrolled * $('#content_area').width());
		}

		init();

		//Exports.
		this.handleScroll = handleScroll;
		this.scrollNav = scrollNav;
	}
})(window.pageXOffset, window.pageYOffset, $('#scrolling_nav_wrapper'), $('#prevWork_wrapper'), $('#work_timeline_scroller'));