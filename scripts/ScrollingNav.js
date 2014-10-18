var ScrollingNav = (function(scroller) {
  return function() {

    var updateScroller = function() {
      var siteHeight = $('#header_wrapper').height() + $('#content_area').height();
      var pageScrollMax = siteHeight - $(window).height();
      var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

      scroller.css('left', ($('body').width() - scroller.width()) * pageAmountScrolled);
    }

    this.updateScroller = updateScroller;
  }
})($('#scrolling_nav_wrapper'));
