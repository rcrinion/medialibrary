'use strict';

angular.module('libApp')
  .controller('filmDetController', ['$scope', '$http', 'itemsService', '$routeParams', '$location',
	function filmDetController($scope, $http, itemsService, $routeParams, $location) 
    {
      console.log('Looking for :' + $routeParams.id);
      $scope.film = itemsService.getfilm($routeParams.id).success(function(data) 
      {
        $scope.film = data;
        console.log($scope.film);
      });    

      $scope.username = token.password.email;
    
      $scope.addfilmDetail = function (film) 
      {
        if (film.details !== null) {
          film.details={'plotsummary': '', 'format': ''};
        }
      };
    
      $scope.saveDetails = function (newdetails) {  
        $scope.film.details = newdetails;
        $http.put('/api/medialib/'+$scope.film._id, $scope.film)
          .success(function(newfilm){
          console.log('Added new item: ' + newfilm);        
        });
        return (newdetails = {});
      };
    
    $scope.Edit = function(film)
    {
      var path="/Edit/"+film._id ;
      $location.path (path) ;
    };
    
     $scope.quit = function()
    {
      var path="/Film";
      console.log('Going back to Films');
      $location.path (path) ;
    }; 
  }]);
