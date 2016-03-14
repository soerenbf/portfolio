(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioHeader', portfolioHeader);

  /* @ngInject */
  function portfolioHeader() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/header/header.html',
      scope: false,
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      scope.$on('scroll', _update);
      _update();

      function _update() {
        //Handle scrolling for the header.
        var threshold = (jQuery(window).height() - jQuery('#header').height()) / 2; //The space between bottom of header and bottom edge of window.
        var offset = window.pageYOffset;

        el.css({
          position: offset <= threshold ? 'fixed' : 'absolute',
          top: offset <= threshold ? 0 + 'px' : threshold + 'px'
        });
      }
    }
  }
})();
