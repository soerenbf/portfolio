(function() {
  'use strict';

  angular
    .module('components.backend')
    .factory('projects', projects);

  projects.$inject = ['$http', '$q'];

  /* @ngInject */
  function projects($http, $q) {
    var _projects = [];

    var service = {
      all: all,
      getProjectByIndex: getProjectByIndex
    };

    return service;

    function all() {
      return ((_projects === undefined || _projects.length === 0)
        ? _fetchProjects().then(function(data) {
          _projects = data;
          return _projects;
        })
        : $q.when(_projects)
      );
    }

    function getProjectByIndex(index) {
      return ((_projects === undefined || _projects.length === 0)
        ? _fetchProjects().then(function(data) {
          _projects = data;
          return _projects[index];
        })
        : $q.when(_projects[index])
      );
    }

    function _fetchProjects() {
      return $http.get('components/backend/projects/projects.json').then(function(response) {
        return response.data;
      });
    }
  }
})();
