(function() {
  'use strict';

  angular
    .module('components.safeApply', [])
    .config(_configApply);

    _configApply.$inject = ['$provide'];

    function _configApply($provide) {
      return $provide.decorator('$rootScope', [
        '$delegate', function($delegate) {
          $delegate.safeApply = function(fn) {
            var phase = $delegate.$$phase;
            if (phase === "$apply" || phase === "$digest") {
              if (fn && typeof fn === 'function') {
                fn();
              }
            } else {
              $delegate.$apply(fn);
            }
          };
          return $delegate;
        }
      ]);
    }
})();
