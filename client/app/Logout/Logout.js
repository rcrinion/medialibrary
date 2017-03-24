'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Logout', {
        templateUrl: 'app/Logout/Logout.html',
        controller: 'LogoutCtrl'
      });
  });
