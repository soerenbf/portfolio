(function() {
  'use strict';

  angular
    .module('components.scroll')
    .directive('handleScroll', handleScroll);

  handleScroll.$inject = ['$window', '$rootScope'];

  /* @ngInject */
  function handleScroll($window, $rootScope) {
    return function(scope, el, attr, ctrl) {
      angular.element($window)
        .on('scroll', _handleScroll)
        .on('resize', _handleScroll);

      function _handleScroll() {
        $rootScope.$broadcast('scroll');
      }
    }
  }
})();
