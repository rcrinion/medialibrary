'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Item', {
        templateUrl: 'app/Item/Item.html',
        controller: 'ItemCtrl'
      });
  });
