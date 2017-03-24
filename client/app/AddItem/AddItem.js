'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/AddItem', {
        templateUrl: 'app/AddItem/AddItem.html',
        controller: 'AddItemCtrl'
      });
  });
