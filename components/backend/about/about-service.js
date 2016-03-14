(function() {
  'use strict';

  angular
    .module('components.backend')
    .factory('about', about);

  about.$inject = ['$q'];

  /* @ngInject */
  function about($q) {
    var img = 'images/other/about.png';
    var email = 'hi@sorenbf.dk';

    var service = {
      all: all
    };

    return service;

    function all() {
      return $q.when({text: _makeText(), img: img, email: email, secrets: _makeSecrets()});
    }

    function _makeText() {
      var string = '';
      string += 'The guy on the picture is Søren, my maker. He likes technology and considers himself a \"Technology Designer\", ';
      string += 'capable of both frontend/backend development using various technologies and frameworks, but also conceptual development ';
      string += 'and prototyping of interactive products. He loves developing and designing software and software embedded solutions and has a ';
      string += 'master\'s degree in IT Product Development, revolving around the entire process of iteratively ideating, developing, '
      string += 'and validating solutions with real users. ';
      return string;
    }

    function _makeSecrets() {
      var string = '';
      string += 'It would be pretty weird for a guy to make a program that has the ability to tell his secrets...'
      return string;
    }
  }
})();
