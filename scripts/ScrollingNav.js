var ScrollingNav = (function(scroller, scrollBar) {
  return function() {

    var updateScroller = function() {
      var siteHeight = $('#background').height() + $('#content_area').height();
      var pageScrollMax = siteHeight - $(window).height();
      var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

      scroller.css('left', ($('body').width() - scroller.width()) * pageAmountScrolled);

      positionBar();
    }

    var positionBar = function() {
      var PageYOffsetFixBar = $(window).height() - $('#header').height() + 2 * scrollBar.height();
      var PageYOffsetPosTop = $(window).height() - scrollBar.height();

      console.log(window.pageYOffset + ", " + PageYOffsetFixBar + ", " + window.pageYOffset >= PageYOffsetFixBar);
      console.log(window.pageYOffset);
      console.log(PageYOffsetFixBar);

      if(window.pageYOffset >= PageYOffsetFixBar) {
        scrollBar.css({
          'position' : 'fixed',
          'top' : $('#header').height() + scrollBar.height()
        });

        if(window.pageYOffset >= PageYOffsetPosTop) {

        }
      } else if(window.pageYOffset < PageYOffsetFixBar) {


        if(window.pageYOffset < PageYOffsetPosTop) {

        }
      }
    }

    this.updateScroller = updateScroller;
  }
})($('#scrolling_nav_wrapper'), $('#nav_scroll_bar'));
