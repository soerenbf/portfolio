var WorkScroller = (function(scroller) {
	return function() {
		var clicks;

		function init() {
			workScrollerClicks = 0;
			bindClickHandler();
		}

		var getClicks = function() {
			return clicks;
		}

		var bindClickHandler = function() {
			scroller.on('click', function() {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					$('body').css('overflow', 'auto');
				} else {
					$(this).addClass('active');
					$('body').css('overflow', 'hidden');
				};

				clicks++;
			});
		}

		init();

		//Exports.
		this.getClicks = getClicks;
	}
})($('#work_timeline_scroller'));