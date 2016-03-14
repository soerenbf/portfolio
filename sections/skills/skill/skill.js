(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('SkillController', SkillController);

  SkillController.$inject = [];

  /* @ngInject */
  function SkillController() {
    var vm = this;

    vm.title = '';
    vm.active = false;
    vm.character = {
      name: '',
      img: '',
      quote: ''
    };

    activate();

    function activate() {

    }
  }
})();
