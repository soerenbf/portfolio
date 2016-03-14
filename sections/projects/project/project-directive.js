(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioProject', portfolioProject);

  portfolioProject.$inject = ['$window'];

  /* @ngInject */
  function portfolioProject($window) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/projects/project/project.html',
      scope: false,
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      el.find('.project-header').on('click', broadcastClick);
      scope.$on('projectClick', toggleProject);

      function broadcastClick(e) {
        scope.$root.$broadcast('projectClick', scope.$index);
        // angular.element('html, body').animate({
        //   scrollTop: (el.offset().top - 20)
        // }, 0);
      }

      function toggleProject(e, projectIndex) {
        scope.$index !== projectIndex || el.hasClass('active') ? el.removeClass('active') : el.addClass('active');
      }
    }
  }
})();
