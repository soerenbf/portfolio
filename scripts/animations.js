var showSignOffset = 1000;
var showSignInterval = 200;

var workScrollerClicked = 0;

$(document).ready(function() {
	//Animation for header of prevWork_item elements.
	$('div#prevWork_item').mouseenter(function() {
		$(this).find('prevWork_item_header').animate({bottom: '100px'}, 250);
	}).mouseleave(function(){
		$(this).find('prevWork_item_header').animate({bottom: '0px'}, 250);
	});

	//To show a hint.
	$(window).on('scroll', function(event) {
		if (window.pageYOffset > showSignOffset && window.pageYOffset < showSignOffset + showSignInterval && workScrollerClicked < 2) {
			switch(workScrollerClicked) {
				case 0 : //Show "click to activate" hint.
					break;
				case 1 : //Show the "scroll to see more" hint.
					break;
			}
		}

		if (workScrollerClicked % 2 === 0) { //It's active
			
		} else {
			
		};
	});

	$('#work_timeline_scroller').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').css('overflow', 'auto');
		} else {
			$(this).addClass('active');
			$('body').css('overflow', 'hidden');
		};

		workScrollerClicked++;
	});
});