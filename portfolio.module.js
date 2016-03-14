(function() {
  'use strict';

  angular
    .module('portfolio', [
      'components.backend',
      'components.scroll',
      'components.safeApply',
      'ui.router'
    ])
    .config(_configRoutes);

  _configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function _configRoutes($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('default', {
        url: '/'
      });
  }
})();
