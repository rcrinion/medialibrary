'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Login', {
        templateUrl: 'app/Login/Login.html',
        controller: 'LoginCtrl'
      });
  });
