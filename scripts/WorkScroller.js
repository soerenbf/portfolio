var WorkScroller = (function(scroller, prevWork) {
	return function(callback) {

		var clicks = 0;
		var scrollSpeed = 10;
		var scrollCallback = callback;
		var startPos = -50;

		var scrollDisabler;

		function init() {
			bindClickHandler();
			scrollDisabler = new ScrollDisabler(scrollCallback);

			scroller.css('left', startPos);
		}

		var getClicks = function() {
			return clicks;
		}

		var bindClickHandler = function() {
			scroller.on('click', function() {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					scrollDisabler.enableScrolling();
				} else {
					$(this).addClass('active');
					scrollDisabler.disableScrolling();
				};

				clicks++;
			});
		}

		var scrollDirection = function(forward) {

			var scrollValue = forward ? scrollSpeed : -scrollSpeed;

			if (prevWork.position().left + scrollValue >= (prevWork.width() - $(window).width() + 150) * -1 && prevWork.position().left + scrollValue <= 0) {
				//Scroll prev_work.
				newPos = prevWork.position().left + (forward ? scrollSpeed : -scrollSpeed);
				prevWork.css('left', newPos);

				//Scroll workScroller accordingly.
				var workScrollMax = prevWork.width() - $(window).width() + 150;
				var workAmountScrolled = 1 - (newPos + workScrollMax) / workScrollMax;

				scroller.css('left', startPos + workAmountScrolled * $('#content_area').width());
			}

		}

		init();

		//Exports.
		this.getClicks = getClicks;
		this.scrollTo = scrollTo;
	}
})($('#work_timeline_scroller'), $('#prev_work_items_wrapper'));
