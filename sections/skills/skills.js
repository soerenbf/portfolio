(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('SkillsController', SkillsController);

  SkillsController.$inject = ['$scope', '$q', 'skills'];

  /* @ngInject */
  function SkillsController($scope, $q, skills) {
    var vm = this;
    var activeIndex;

    vm.activeSection;
    vm.sections = [];

    vm.previousSkill = previousSkill;
    vm.nextSkill = nextSkill;

    _activate();

    function _activate() {
      var promises = [_getSkills()];

      $scope.$on('skillClick', _setActiveSkill);

      return $q.all(promises).then(_skillsReady);
    }

    function previousSkill() {
      var prevIndex = ((activeIndex - 1) % 3);
      $scope.$root.$broadcast('skillClick', prevIndex >= 0 ? prevIndex : 3 + prevIndex);
    }

    function nextSkill() {
      var nextIndex = ((activeIndex + 1) % 3);
      $scope.$root.$broadcast('skillClick', nextIndex >= 0 ? nextIndex : 3 + nextIndex);
    }

    function _getSkills() {
      skills.all().then(function(data) {
        vm.sections = data;
      });
    }

    function _setActiveSkill(e, index) {
      $scope.$root.safeApply(function() {
        activeIndex = index;
        vm.activeSection = vm.sections[activeIndex];
      });
    }

    function _skillsReady() {
      console.log('Skills loaded');
    }
  }
})();
