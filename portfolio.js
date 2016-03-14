(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController);

  PortfolioController.$inject = ['$q','tabs', 'skills', 'about'];

  /* @ngInject */
  function PortfolioController($q, tabs, skills, about) {
    var vm = this;
    var headerImages = ['awkward_smile.jpg', 'on_the_lift.jpg', 'lost_in_england.jpg'];
    var currentHeaderImage = 0;
    var headerImageBase = 'images/profile/';

    vm.header = {
      imgSrc: headerImageBase + headerImages[currentHeaderImage],
      imgName: headerImages[currentHeaderImage]
    };
    vm.nextHeaderImage = nextHeaderImage;

    vm.navigation = {
      tabs: []
    };

    _activate();

    function _activate() {
      var promises = [_getTabs()];

      return $q.all(promises).then(_siteReady);
    }

    function nextHeaderImage() {
      currentHeaderImage = ((currentHeaderImage + 1) % headerImages.length);
      vm.header.imgSrc = headerImageBase + headerImages[currentHeaderImage];
      vm.header.imgName = headerImages[currentHeaderImage];
    }

    function _getTabs() {
      tabs.all().then(function(data) {
        vm.navigation.tabs = data;
      });
    }

    function _siteReady() {
      console.log('Site ready!');
    }
  }
})();
