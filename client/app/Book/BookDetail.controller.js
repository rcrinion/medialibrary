'use strict';

angular.module('libApp')
  .controller('bookDetController', ['$scope', '$http', 'itemsService', '$location','$routeParams',
       function BookCtrl($scope, $http, itemsService, $location, $routeParams)
            {
              console.log('Looking for :' + $routeParams.id);
              $scope.book = itemsService.getbook($routeParams.id).success(function(data) 
                {
                  $scope.book = data;
                  console.log($scope.book);
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

      $scope.addbookDetail = function (book) 
      {
      	if (book.details !== null) {
        	book.details={'frontcover': '', 'plotsummary': '', 'format': ''};
        }
      };
        
      $scope.Edit = function(book)
      {
        var path="/Edit/"+book._id ;
        $location.path (path) ;
      };

      $scope.saveDetails = function (newdetails) 
      {  
      	$scope.book.details = newdetails;
        $http.put('/api/medialib/'+$scope.book._id, $scope.book)
        .success(function(book){
        	console.log('Added new item: ' + book);
        });
      	$scope.newItem = {}; 
        return (newdetails = {});
      };
      
  }]);

