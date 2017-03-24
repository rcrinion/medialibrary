'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/Login/Login.html',
        controller: 'LoginCtrl'
      });
  });