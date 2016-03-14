(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioProjects', portfolioProjects);

  /* @ngInject */
  function portfolioProjects() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/projects/projects.html',
      scope: {
      },
      link: linkFunc,
      controller: 'ProjectsController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      el.find('#category-array').on('click', '.project-category', _toggleCat);

      function _toggleCat(e) {
        scope.$root.safeApply(function() {
          var categoryElements = angular.element('#category-array .project-category');
          var clickedEl = angular.element('#category-array #' + e.currentTarget.id);

          categoryElements.addClass('inactive');

          for (var i = 0; i < ctrl.categories.length; i++) {
            var category = ctrl.categories[i];

            if (category.name === e.currentTarget.id) {
              category.active = !category.active;
              ctrl.activeCategory = category.active ? category.name : undefined;

              if (category.active) {
                clickedEl.removeClass('inactive');
              }
            } else {
              category.active = false;
            }
          }

          if (ctrl.activeCategory !== undefined) {
            clickedEl.siblings().addClass('inactive')
          } else {
            clickedEl.removeClass('inactive');
            clickedEl.siblings().removeClass('inactive')
          }
        });
      }
    }
  }
})();
