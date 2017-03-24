'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lookup', {
        templateUrl: 'app/lookup/lookup.html',
        controller: 'LookupCtrl'
      });
  });
