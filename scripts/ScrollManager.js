var ScrollManager = (function(x, y) {
	return function(workScroller) {

		var showSignOffset;
		var showSignInterval;

		var init = function() {
			showSignOffset = 1000;
			showSignInterval = 200;
		}

		var handleScroll = function() {
			scrollNav();
			toggleSign();
			if (workScroller.getClicks() % 2 !== 0) { //It's been clicked an uneven number of times; it's active.
				scrollWorkScroller();
			}
			
		}

		var scrollNav = function() {
			var pageScrollMax = $('#content_area').height() - $('body').height();
			var amountScrolled = (1 - (pageScrollMax - window.pageYOffset) / pageScrollMax);

			$('#scrolling_nav_wrapper').css('top', ($('body').height() - $('#scrolling_nav_wrapper').height()) * amountScrolled);
		}

		var toggleSign = function() {
			if (y > showSignOffset && y < showSignOffset + showSignInterval && workScroller.getClicks() < 2) {
				switch(workScrollerClicked) {
					case 0 : //Show "click to activate" hint.
						break;
					case 1 : //Show the "scroll to see more" hint.
						break;
				}
			}
		}

		var scrollWorkScroller = function() {
			
		}

		var printTest = function() {
			console.log(1);
		}

		init();

		//Exports.
		this.handleScroll = handleScroll;
		this.scrollNav = scrollNav;
		this.printTest = printTest;
	}
})(window.pageXOffset, window.pageYOffset);