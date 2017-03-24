'use strict';

angular.module('libApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Music', {
        templateUrl: 'app/Music/Music.html',
        controller: 'MusicCtrl'
      })

     .when('/Music/:id',
     	{
        	templateUrl: 'app/Music/musicdetails.html',
        	controller: 'musicDetailController'
        });
  });
