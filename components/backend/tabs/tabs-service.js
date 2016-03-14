(function() {
  'use strict';

  angular
    .module('components.backend')
    .factory('tabs', tabs);

  tabs.$inject = ['$http', '$q'];

  /* @ngInject */
  function tabs($http, $q) {
    var _tabs = [];

    var service = {
      all: all,
      getTabByIndex: getTabByIndex
    };

    return service;

    function all() {
      return ((_tabs === undefined || _tabs.length === 0)
        ? _fetchTabs().then(function(data) {
          _tabs = data;
          return _tabs;
        })
        : $q.when(_tabs)
      );
    }

    function getTabByIndex(index) {
      return ((_tabs === undefined || _tabs.length === 0)
        ? _fetchTabs().then(function(data) {
          _tabs = data;
          return _tabs[index];
        })
        : $q.when(_tabs[index])
      );
    }

    function _fetchTabs() {
      return $http.get('components/backend/tabs/tabs.json').then(function(response) {
        return response.data;
      });
    }
  }
})();
