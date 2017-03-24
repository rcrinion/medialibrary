'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/image', {
        templateUrl: 'app/image/image.html',
        controller: 'ImageCtrl'
      });
  });
