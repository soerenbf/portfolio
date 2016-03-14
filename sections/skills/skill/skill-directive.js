(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('portfolioSkill', portfolioSkill);

  portfolioSkill.$inject = ['$rootScope', 'skills'];

  /* @ngInject */
  function portfolioSkill($rootScope, skills) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'sections/skills/skill/skill.html',
      scope: false,
      link: linkFunc,
      controller: 'SkillController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      var index = scope.$index;
      var initActive = 1;

      skills.getSkillByIndex(index).then(function(skill) {
        ctrl.title = skill.title;
        ctrl.character.name = skill.character.name;
        ctrl.character.img = skill.character.img;
        ctrl.character.quote = skill.character.quote;

        if (index === initActive) {
          $rootScope.$broadcast('skillClick', index);
        }
      });

      el.find('img')
        .on('mouseenter', _handleMouseEnter)
        .on('mouseleave', _handleMouseLeave)
        .on('click', _broadcastClick);

      scope.$on('skillClick', _handleClick);

      function _handleMouseEnter() {
        el.addClass('hovering');
      }

      function _handleMouseLeave() {
        el.removeClass('hovering');
      }

      function _broadcastClick() {
        $rootScope.$broadcast('skillClick', index);
      }

      function _handleClick(e, skillIndex) {
        scope.$root.safeApply(function() {
          ctrl.active = (index === skillIndex) ? true : false;
        });
      }
    }
  }
})();
