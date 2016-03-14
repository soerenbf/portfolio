(function() {
  'use strict';

  angular
    .module('components.backend')
    .factory('skills', skills);

  skills.$inject = ['$http', '$q'];

  /* @ngInject */
  function skills($http, $q) {
    var _skills = [];
    
    var service = {
      all: all,
      getSkillByIndex: getSkillByIndex
    };

    return service;

    function all() {
      return ((_skills === undefined || _skills.length === 0)
        ? _fetchSkills().then(function(data) {
          _skills = data;
          return _skills;
        })
        : $q.when(_skills)
      );
    }

    function getSkillByIndex(index) {
      return ((_skills === undefined || _skills.length === 0)
        ? _fetchSkills().then(function(data) {
          _skills = data;
          return _skills[index];
        })
        : $q.when(_skills[index])
      );
    }

    function _fetchSkills() {
      return $http.get('components/backend/skills/skills.json').then(function(response) {
        return response.data;
      });
    }
  }
})();
