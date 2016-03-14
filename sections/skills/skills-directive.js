(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioSkills', portfolioSkills);

  /* @ngInject */
  function portfolioSkills() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/skills/skills.html',
      scope: {
      },
      link: linkFunc,
      controller: 'SkillsController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      
    }
  }
})();
