'use strict';

angular.module('libApp')
  .controller('musicDetailController', ['$scope', '$http', 'itemsService', '$location', '$routeParams', 
          function musicDetailController($scope, $http, itemsService, $location, $routeParams) 
            {
              console.log('Looking for :' + $routeParams.id);
              $scope.album = itemsService.getAlbum($routeParams.id).success(function(data) 
                {
                  $scope.album = data;
                  console.log($scope.album);
            });
            $scope.username = token.password.email;

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

      $scope.Edit = function(album)
      {
        var path="/Edit/"+album._id ;
        $location.path (path) ;
      };

      $scope.saveTrack = function(newTrack) {  
        $scope.album.tracks[$scope.album.tracks.length-1] = newTrack;
        newTrack={};
        $http.put('/api/medialib/'+$scope.album._id, $scope.album)
          .success(function(newalbum){
          console.log('Added new item: ' + newalbum);
        });
      };
    }]);

