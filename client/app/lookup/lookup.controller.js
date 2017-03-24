'use strict';

angular.module('libApp')
  .controller('LookupCtrl', ['$rootScope', '$scope', '$http', '$location', '$element', 'dialogs', '$timeout',
  	function ($rootScope, $location, $scope, $element, dialogs, $timeout, $http) {
    $scope.message = 'Hello';

    $scope.querymovie = function()
    {
        // API Key for TMDb.com: ea80d0c1c81d9f646968b870d6652841
        var apiKey = 'ea80d0c1c81d9f646968b870d6652841';
        
        var movie = {};
        
        var modTitle = removeSpaces($scope.title);

        var Item = $http.get('/api/movies/' + modTitle).success(function(data) {
                   Item = data; 
        });
    
        console.log('Search for: '+ modTitle);
        var req = {
            method: 'GET',
            url: 'https://www.omdbapi.com/?t='+modTitle+'&y=&plot=short&r=json'
        }
        
        $http(req).success(function (data) {
        	movie = data;

        		Item.title = movie.Title;
        		Item.artist = movie.Director;
            	Item.genre =  movie.Genre;
            	download(movies.Poster);
            	Item.imageUrl = 'images/'+modTitle+'.jpg'
            	Item.snippet = movie.Plot;
            	Item.details.plotsummary = movie.details

            console.log('Status:', res.status);
            console.log('Headers:', res.headers);
            console.log('Body:', res.body);
        });
    };

	function removeSpaces(text) {
			var str = text.replace(/\s+/g, '+');
			return str;
    };

    function prepare(url) {
        dialogs.wait("Please wait", "Your download starts in a few seconds.", $scope.progress);
        fakeProgress();
    };
    
    function success(url) {
        $rootScope.$broadcast('dialogs.wait.complete');
    };
    
    function error(response, url) {
        dialogs.error("Couldn't process your download!");
    };

    function fakeProgress() {
        $timeout(function () {
        	if ($scope.progress < 95) {
            	$scope.progress += (96 - $scope.progress) / 2;
            	$rootScope.$broadcast('dialogs.wait.progress', { 'progress': $scope.progress });
            	fakeProgress();
        	}
        }, 250);
    };

    $scope.download = function (url) {
        $scope.progress = 0;
        $.fileDownload(url, { prepareCallback: prepare, successCallback: success, failCallback: error });
    };

  }]);


/*
Sampleoutput from Open Movie DB

{"Title":"The Godfather","Year":"1972","Rated":"R","Released":"24 Mar 1972","Runtime":"175 min","Genre":"Crime, Drama",
"Director":"Francis Ford Coppola","Writer":"Mario Puzo (screenplay), Francis Ford Coppola (screenplay), Mario Puzo (novel)",
"Actors":"Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
"Plot":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","Language":"English, Italian, Latin","Country":"USA","Awards":"Won 3 Oscars. Another 30 wins & 19 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg","Metascore":"100","imdbRating":"9.2","imdbVotes":"989603","imdbID":"tt0068646","Type":"movie","Response":"True"}
*/