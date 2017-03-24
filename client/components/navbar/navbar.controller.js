'use strict';

angular.module('libApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/Item'
    },
    {
      'title': 'Books',
      'link': '/Book'
    },
    {
      'title': 'Music',
      'link': '/Music'
    },
    {
      'title': 'Film',
      'link': '/Film'
    },
    {
      'title': 'Lookuo',
      'link': '/lookup'
    },
    {
      'title': 'Logout',
      'link': '/Logout'
    }
];

    $scope.isCollapsed = false;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
