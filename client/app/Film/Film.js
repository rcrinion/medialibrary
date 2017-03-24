'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Film', {
        templateUrl: 'app/Film/Film.html',
        controller: 'FilmCtrl'
      })
      .when('/Film/:id',
      {
      	templateUrl: 'app/Film/filmdetails.html',
      	controller: 'filmDetController'
      });
  });
