(function() {
  'use strict';

  angular
    .module('portfolio')
    .filter('categoryFilter', categoryFilter);

  function categoryFilter() {
    return function(projects, category) {
      if (category === undefined) {
        return projects;
      }

      var filteredProjects = [];

      for (var i = 0; i < projects.length; i++) {
        var project = projects[i];

        for (var j = 0; j < project.categories.length; j++) {
          var projectCategory = project.categories[j];

          if (category === projectCategory) {
            filteredProjects.push(project);
            break;
          }
        }
      }

      console.log(filteredProjects);
      return filteredProjects;
    }
  }
})();
