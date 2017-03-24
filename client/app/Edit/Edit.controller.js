'use strict';

angular.module('libApp')
  libApp.controller('EditCtrl', ['$scope', '$http', 'itemsService', '$location', '$routeParams', 
    function EditCtrl($scope, $http, itemsService, $location, $routeParams) 
    {
      	console.log('Looking for :' + $routeParams.id);
        $scope.newItem = itemsService.getAlbum($routeParams.id).success(function(data) 
        {
            $scope.newItem = data;
            console.log($scope.newItem);
        });

    $scope.username = token.password.email;

  	$scope.saveTrack = function(newTrack) {  
    	$scope.newItem.tracks[$scope.newItem.tracks.length-1] = newTrack;
        newTrack={};
        $http.put('/api/medialib/'+$scope.newItem._id, $scope.newItem)
          .success(function(newalbum){
          console.log('Added new item: ' + newalbum);
        });
    };

    $scope.addTrack = function(album) {
        var newTrackNum = 1;
        var newTrackName = '';
        if ($scope.album.tracks.length > 0) {
        	newTrackNum = 1 + ($scope.album.tracks.length);
        } else {
        	newTrackNum = 1;
        }
        album.tracks.push({
        	tracknum: newTrackNum,
        	tracktitle: newTrackName
        });
    };

    $scope.saveDetails = function (newdetails) {  
    	
        $http.put('/api/medialib/'+$scope.newItem._id, $scope.newItem)
        .success(function(newfilm){
           	console.log('Added new item: ' + newfilm);        
        });
      
        var path="/Film/"+$scope.newItem._id ;
          $location.path (path) ;
        return (newdetails = {});
    };

    $scope.querymovie = function()
        {
          // API Key for TMDb.com: ea80d0c1c81d9f646968b870d6652841
          var apiKey = 'ea80d0c1c81d9f646968b870d6652841';
          var path = '/Film';

          if ($scope.newItem.details !== null) {
            $scope.newItem.details={'plotsummary': '', 'format': ''};
          }

          var modTitle = removeSpaces($scope.newItem.title);

          console.log('Search for: '+ modTitle);
          var req = {
              method: 'GET',
              url: 'http://www.omdbapi.com/?t='+modTitle+'&y=&plot=short&r=json'
          }

          var movie = $http(req)
          .success(function (data) {
            movie = data;
            if (movie.response === false) {
              msgbox('got no response')
            } else {
              console.log(movie);
              $scope.newItem.title = movie.Title;
              $scope.newItem.artist = movie.Director;
              $scope.newItem.genre =  movie.Genre;
              $scope.newItem.imageUrl = movie.Poster
              $scope.newItem.snippet = movie.Plot;
              $scope.newItem.details.plotsummary = movie.Plot;
              $scope.newItem.details.format = 'DVD';
/*              $http.put('/api/medialib/'+$scope.newItem._id, $scope.newItem)
                .success(function(newfilm){
                console.log('Added new item: ' + newfilm);        

        });  */
            }


          });
          
        };

        function removeSpaces(text) {
          var str = text.replace(/\s+/g, '+');
          return str;
        };
  }]);
