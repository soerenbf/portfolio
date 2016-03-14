(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['$q', 'about'];

  /* @ngInject */
  function AboutController($q, about) {
    var vm = this;

    vm.img = '';
    vm.text = '';
    vm.email = '';
    vm.secrets = '';
    vm.showSecrets = false;

    activate();

    function activate() {
      var promises = [_getAbout()];

      return $q.all(promises).then(_aboutLoaded);
    }

    function _getAbout() {
      about.all().then(function(data) {
        vm.img = data.img;
        vm.text = data.text;
        vm.email = data.email;
        vm.secrets = data.secrets;
      });
    }

    function _aboutLoaded() {
      console.log('About loaded');
    }
  }
})();
