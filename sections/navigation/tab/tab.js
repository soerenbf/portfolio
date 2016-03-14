(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('TabController', TabController);

  TabController.$inject = [];

  /* @ngInject */
  function TabController() {
    var vm = this;

    vm.left = '';
    vm.title = '';
    vm.right = '';

    activate();

    function activate() {

    }
  }
})();
