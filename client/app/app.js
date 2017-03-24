'use strict';

// app.js

//formFor Angular Form build module.

var libApp = angular.module('libApp', ['ngRoute', 'firebase']);

//Application definition including ngRoute and Firebase
var libApp = angular.module('libApp');


// Connect to Firebase instance
var ref = new Firebase('https://blazing-heat-5713.firebaseio.com');

// Get Authorization status
var authData = ref.getAuth();

//Define variable to carry authorization across controllers
var token;
token = [];


libApp.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    console.log('Got into the app')
    if (error === 'AUTH_REQUIRED') {
      $location.path('/Login');
    }
  });
}]);

  libApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/Login/Login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/Login'
      });

    $locationProvider.html5Mode(true);
  });



