'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Edit/:id', {
        templateUrl: 'app/Edit/Edit.html',
        controller: 'EditCtrl'
      });
  });
