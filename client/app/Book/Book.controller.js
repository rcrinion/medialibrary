'use strict';

angular.module('libApp')
  .controller('BookCtrl', ['$scope', '$http', 'itemsService',
       function BookCtrl($scope, $http, itemsService) {
      		$scope.items = itemsService.getItems().success(function(data) {
                   $scope.items = data; 
        });

      
      $scope.sortType     = 'title'; // set the default sort type
      $scope.sortReverse  = false;  // set the default sort order
      $scope.searchAuthor   = '';     // set the default search/filter term
      $scope.field = 'artist';
      $scope.username = token.password.email;

      $scope.toggleSort = function(colname) {
        if($scope.sortColumn === colname){
          $scope.reverse = !$scope.reverse;
        }                    
        $scope.sortColumn = colname;
      };
  }]);
 
