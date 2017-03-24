'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Book', 
      {
        templateUrl: 'app/Book/Book.html',
        controller: 'BookCtrl'
      })
      .when('/Book/:id',
      {
      	templateUrl: 'app/Book/bookdet.html',
        controller: 'bookDetController'
      });
  });
