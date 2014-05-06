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
			var amountScrolled = (1 - (pageScrollMax - window.pageYOffset) / pageScrollMax);

			scrollingNav.css('top', ($('body').height() - scrollingNav.height()) * amountScrolled);
		}

		var toggleSign = function(shouldToggle) {
			if (shouldToggle) {
				//Show the sign telling the user to click the work scroller.
			}
		}

		var handleWorkScroll = function(event) {
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
			var scrollSpan = prevWork.width() - $(window).width() + 150;

			//workScrollerEl.css('left', workScrollerEl.position().left + ((newPos - scrollSpan)/scrollSpan) * $('#content_area').width()); //FIGURE THIS OUT!
		}

		init();

		//Exports.
		this.handleScroll = handleScroll;
		this.scrollNav = scrollNav;
	}
})(window.pageXOffset, window.pageYOffset, $('#scrolling_nav_wrapper'), $('#prevWork_wrapper'), $('#work_timeline_scroller'));