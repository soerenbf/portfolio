var ScrollingNav = (function(scroller) {
  return function() {

    var updateScroller = function() {
      var pageScrollMax = $('#content_area').height() - $('body').height();
      var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

      scroller.css('top', ($('body').height() - scroller.height()) * pageAmountScrolled);
    }

    this.updateScroller = updateScroller;
  }
})($('#scrolling_nav_wrapper'));
