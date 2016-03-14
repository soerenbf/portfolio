(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioAbout', portfolioAbout);

  /* @ngInject */
  function portfolioAbout() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/about/about.html',
      scope: {
      },
      link: linkFunc,
      controller: 'AboutController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      scope.$on('scroll', _handleScroll);
      _handleScroll();

      el.find('.interactive').on('click', _toggleSecrets);

      function _handleScroll() {

      }

      function _toggleSecrets(e) {
        scope.$root.safeApply(function() {
          ctrl.showSecrets = !ctrl.showSecrets;
        });
      }
    }
  }
})();
