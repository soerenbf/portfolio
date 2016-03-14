var ScrollingNav = (function(scroller) {
  return function() {

    var welcomeThreshold, portfolioThreshold, skillsThreshold, contactThreshold;
    var scrollOverlap = 200;

    var activeNavElem;

    var updateScroller = function() {
      var siteHeight = $(window).height() + $('#content_area').height(); //window.height is included because of scrolling through the #background first, (background height cannot be used as this is dynamic).
      var pageScrollMax = siteHeight - $(window).height();
      var pageAmountScrolled = 1 - (pageScrollMax - window.pageYOffset) / pageScrollMax;

      scroller.css('left', ($('body').width() - scroller.width()) * pageAmountScrolled);

      _reloadThresholds();

      //Update text & icon of scroller according to section displayed. Shift when bottom is aligned to top of new section + 200px (is 200px into new section).
      if (window.pageYOffset >= welcomeThreshold && window.pageYOffset < portfolioThreshold) {
        activeNavElem = $('#nav_home');
      } else if (window.pageYOffset > portfolioThreshold && window.pageYOffset < skillsThreshold) {
        activeNavElem = $('#nav_work');
      } else if (window.pageYOffset > skillsThreshold && window.pageYOffset < contactThreshold) {
        activeNavElem = $('#nav_skills');
      } else if (window.pageYOffset > contactThreshold) {
        activeNavElem = $('#nav_contact');
      }

      _updateNavTitle();
    }

    var _updateNavTitle = function() {

      console.log(window.pageYOffset);

      $('.nav_item').each(function() {
        if($(this).is(activeNavElem)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

    }

    var _reloadThresholds = function() {
      welcomeThreshold = 0;
      portfolioThreshold = scrollOverlap;
      skillsThreshold = portfolioThreshold + $('#prev_work_wrapper').height();
      contactThreshold = skillsThreshold + $('#skills_wrapper').height();
    }

    this.updateScroller = updateScroller;
  }
})($('#scrolling_nav_wrapper'), $('#nav_scroll_bar'));
