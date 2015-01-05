var ScrollingNav = (function(scroller) {
  return function() {

    var updateScroller = function() {
      var siteHeight = $(window).height() + $('#content_area').height(); //window.height is included because of scrolling through the #background first, (background height cannot be used as this is dynamic).
      var pageScrollMax = siteHeight - $(window).height();
      var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

      scroller.css('left', ($('body').width() - scroller.width()) * pageAmountScrolled);
    }

    this.updateScroller = updateScroller;
  }
})($('#scrolling_nav_wrapper'), $('#nav_scroll_bar'));
