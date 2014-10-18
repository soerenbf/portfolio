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
			updateHeader();
			$('#header_wrapper').height($(window).height() - window.pageYOffset);
			toggleSign(y > showSignOffset && y < showSignOffset + showSignInterval && workScroller.getClicks() === 0);
		}

		var toggleSign = function(shouldToggle) {
			if (shouldToggle) {
				//Show the sign telling the user to click the work scroller.
			}
		}

		var handleWorkScroll = function(event, inputIsMouse) { //Sent to workScroller -> workScroller.scrollDisabler as a callback.
			var keyboardScrollSpeed = 10;

			if(inputIsMouse) {
				workScroller.scrollDirection(event.deltaY);
			} else {
				switch(event.keyCode) {
					case 32: //Spacebar
						workScroller.scrollDirection(keyboardScrollSpeed);
						break;
					case 33: //Jump to beginning of page
						workScroller.scrollDirection(keyboardScrollSpeed * -1);
						break;
					case 34: //Jump to end of page
						workScroller.scrollDirection(keyboardScrollSpeed);
						break;
					case 35: //End of line
						workScroller.scrollDirection(keyboardScrollSpeed);
						break;
					case 36: //Start of line
						workScroller.scrollDirection(keyboardScrollSpeed * -1);
						break;
					case 38: //Up
						workScroller.scrollDirection(keyboardScrollSpeed * -1);
						break;
					case 39: //Right
						workScroller.scrollDirection(keyboardScrollSpeed);
						break;
					case 37: //Left
						workScroller.scrollDirection(keyboardScrollSpeed * -1);
						break;
					case 40: //Down
						workScroller.scrollDirection(keyboardScrollSpeed);
						break;
					default:
						break;
				}
			}
		}

		var updateHeader = function() {
			var PageYOffsetFixBar = $(window).height() - ($('#header').height() + 2 * $('#nav_scroll_bar').height());
			var PageYOffsetPosTop = $(window).height() - $('#nav_scroll_bar').height();

			if(window.pageYOffset >= PageYOffsetFixBar) {
				$('#background').css({
					'position' : 'relative',
					'top' : PageYOffsetFixBar
				});

				if(window.pageYOffset >= PageYOffsetPosTop) {
					$('#nav_scroll_bar').css({
						'position' : 'fixed',
						'top' : 0
					});
				}
			} else if(window.pageYOffset < PageYOffsetFixBar) {
				$('#background').css({
					'position' : 'fixed',
					'top' : 0
				});
			}

			if(window.pageYOffset < PageYOffsetPosTop) {
				$('#nav_scroll_bar').css({
					'position' : 'absolute',
					'top' : $(window).height() - $('#nav_scroll_bar').height()
				});
			}
		}

		init();

		//Exports.
		this.handleScroll = handleScroll;
	}
})(window.pageXOffset, window.pageYOffset, $('#scrolling_nav_wrapper'), $('#prev_work_items_wrapper'), $('#work_timeline_scroller'));
