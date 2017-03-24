'use strict';

angular.module('libApp')
  .controller('AddItemCtrl', ['$scope', '$http', '$location', 'fileUpload',
    function AddItemCtrl($scope, $http, $location, fileUpload) 
    {
    	$scope.username = token.password.email;
      
        $scope.uploadComplete = function (content) 
        {
            $scope.response = JSON.parse(content); // Presumed content is a json string!
            $scope.response.style = {
                color: $scope.response.color,
                'font-weight': 'bold'
            };
        };

 
      $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        var uploadUrl = '/api/images';
        fileUpload.uploadFileToUrl(file, uploadUrl, $scope.newItem);

        var path='/Item';
        // Go back to main view of library
        $location.path (path);

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
            }
          });
          
        };

        function removeSpaces(text) {
          var str = text.replace(/\s+/g, '+');
          return str;
        };


}]);

libApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

libApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, newItem){
        var fd = new FormData();
        
        
        
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(file){
            console.log('File saved as: ' + file);
            //Add the JSON version of the form data fields to the Form Data object
            newItem.imageUrl = 'images/' + file;
            console.log(newItem);
            $http.post('/api/medialib', newItem)
            .success(function(item)
            {
                console.log('Added new item: ' + item);
            });
        })
        .error(function(){
        });
    };
}]);
