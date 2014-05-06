var WorkScroller = (function(scroller) {
	return function(callback) {
		var clicks = 0;
		var scrollCallback = callback;
		var startPos = $('#work_timeline_scroller').position().left;

		var scrollDisabler;

		function init() {
			bindClickHandler();
			scrollDisabler = new ScrollDisabler(scrollCallback);
		}

		var getClicks = function() {
			return clicks;
		}

		var getStartPos = function() {
			return startPos;
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

		init();

		//Exports.
		this.getClicks = getClicks;
		this.getStartPos = getStartPos;
	}
})($('#work_timeline_scroller'));