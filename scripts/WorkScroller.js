var WorkScroller = (function(scroller, prevWork) {
	return function(callback) {

		var clicks = 0;
		var scrollSpeed = 10;
		var scrollCallback = callback;
		var startPos = -53;

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

			if (prevWork.position().left + scrollValue >= (prevWork.width() - $(window).width()) * -1 && prevWork.position().left + scrollValue <= 0) {
				//Scroll prev_work.
				newPos = prevWork.position().left + (forward ? scrollSpeed : -scrollSpeed);
				prevWork.css('left', newPos);

				//Scroll workScroller accordingly.
				var workScrollMax = prevWork.width() - $(window).width();
				var workAmountScrolled = 1 - (newPos + workScrollMax) / workScrollMax;

				scroller.css('left', startPos + workAmountScrolled * $('#content_area').width());

			} else if (prevWork.position().left + scrollValue < (prevWork.width() - $(window).width()) * -1) {
				prevWork.css('left', (prevWork.width() - $(window).width()) * -1);
				scroller.css('left', startPos + $('#content_area').width());
			} else if (prevWork.position().left + scrollValue > 0) {
				prevWork.css('left', 0);
				scroller.css('left', startPos);
			}

		}

		init();

		//Exports.
		this.getClicks = getClicks;
		this.scrollDirection = scrollDirection;
	}
})($('#work_timeline_scroller'), $('#prev_work_items_wrapper'));
