(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioTab', portfolioTab);

  portfolioTab.$inject = ['$window', 'tabs'];

  /* @ngInject */
  function portfolioTab($window, tabs) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/navigation/tab/tab.html',
      scope: false,
      link: linkFunc,
      controller: 'TabController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      var index = scope.$index;
      var tab = scope.tab;
      var last = scope.$last;
      var navItem = angular.element(el.find('div.nav-item'));

      ctrl.left = tab.left;
      ctrl.title = tab.title;
      ctrl.right = tab.right;

      scope.$on('scroll', _update);
      navItem.on('click', _goToSection);

      _update();

      function _update() {
        var threshold = angular.element(tab.element).offset().top;
        var nextThreshold = -1;

        if (!last) {
          tabs.getTabByIndex(index + 1).then(function(nextTab) {
            nextThreshold = angular.element(nextTab.element).offset().top;
            _toggleActive();
          });
        } else {
          _toggleActive();
        }

        function _toggleActive() {
          var offset = window.pageYOffset;
          var add = offset >= threshold && (offset < nextThreshold || nextThreshold < 0);
          var expand = add && !last && offset !== 0;

          el.toggleClass('active', add)
            .toggleClass('expanded', expand);
        }
      }

      function _goToSection() {
        tabs.getTabByIndex(index).then(function(tab) {
          angular.element('html, body').animate({
            scrollTop: angular.element(tab.element).offset().top
          }, 1000);
        });
      }
    }
  }
})();
