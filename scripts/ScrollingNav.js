var ScrollingNav = (function(scroller) {
  return function() {

    var updateScroller = function() {
      var siteHeight = $('#background').height() + $('#content_area').height();
      var pageScrollMax = siteHeight - $(window).height();
      var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

      scroller.css('left', ($('body').width() - scroller.width()) * pageAmountScrolled);

      positionBar();
    }

    var positionBar = function() {
      var PageYOffsetFixBar = $(window).height() - $('#header').height() + 2 * $('#nav_scroll_bar').height();
      var PageYOffsetPosTop = $(window).height() - $('#nav_scroll_bar').height();

      if(window.pageYOffset >= PageYOffsetFixBar) {


        if(window.pageYOffset >= PageYOffsetPosTop) {

        }
      } else if(window.pageYOffset < PageYOffsetFixBar) {
        

        if(window.pageYOffset < PageYOffsetPosTop) {

        }
      }
    }

    this.updateScroller = updateScroller;
  }
})($('#scrolling_nav_wrapper'));
