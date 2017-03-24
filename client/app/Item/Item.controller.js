'use strict';

angular.module('libApp')
  .controller('ItemCtrl',['$scope', '$http', 'itemsService', 
    function ItemCtrl($scope, $http, itemsService) {
      $scope.items = itemsService.getItems().success(function(data) {
                   $scope.items = data; 
        });
      $scope.sortType     = 'title'; // set the default sort type
      $scope.sortReverse  = false;  // set the default sort order
      $scope.searchAuthor   = '';     // set the default search/filter term
      $scope.field = 'artist';
      $scope.username = token.password.email;

      $scope.addItem = function(){
        $http.post('/api/medialib', $scope.newItem)
          .success(function(item){
                      console.log('Added new item: ' + item);
          });
        $scope.newItem = {}; 
    };


      $scope.borrowItem = function(item) {
        item.status = 'On Loan';
        $http.put('/api/medialib/'+item._id, item)
            .success(function(newitem){
                      console.log('Added new item: ' + newitem);
          });
      };
      $scope.returnItem = function(item) {
        item.status = 'Available';
        $http.put('/api/medialib/'+item._id, item)
          .success(function(newitem){
          console.log('Added new item: ' + newitem);
        });
      };
      $scope.toggleSort = function(colname) {
        if($scope.sortColumn === colname){
          $scope.reverse = !$scope.reverse;
        }                    
        $scope.sortColumn = colname;
      };
  }]);
  

