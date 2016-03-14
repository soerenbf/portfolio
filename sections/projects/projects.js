(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ProjectsController', ProjectsController);

  ProjectsController.$inject = ['$scope', '$q', 'projects'];

  /* @ngInject */
  function ProjectsController($scope, $q, projects) {
    var vm = this;
    var sortDescriptors = ['"priority"', '"newest"'];
    var currentSortDescriptor = 0;
    var activeProject;
    var activeIndex;

    vm.categories = [];
    vm.activeCategory;
    vm.projects = [];
    vm.sortBy = sortDescriptors[currentSortDescriptor];

    vm.nextSortDescriptor = nextSortDescriptor;

    activate();

    function activate() {
      var promises = [_getProjects()];

      $scope.$on('projectClick', toggleProject);

      return $q.all(promises).then(_projectsLoaded);
    }

    function nextSortDescriptor() {
      currentSortDescriptor = ((currentSortDescriptor + 1) % sortDescriptors.length);
      vm.sortBy = sortDescriptors[currentSortDescriptor];
    }

    function _getProjects() {
      projects.all().then(function(data) {
        vm.projects = data.projects;

        for (var i = 0; i < data.categories.length; i++) {
          vm.categories.push({name: data.categories[i], active: false});
          // vm.activeCategories.push(data.categories[i]);
        }
      });
    }

    function toggleProject(e, projectIndex) {
      activeIndex = projectIndex;
    }

    function _projectsLoaded() {
      console.log('Projects loaded');
    }
  }
})();
