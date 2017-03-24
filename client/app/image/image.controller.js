'use strict';

angular.module('libApp');

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

libApp.controller('ImageCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
    

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        var uploadUrl = '/api/images';
        fileUpload.uploadFileToUrl(file, uploadUrl, $scope.newItem);
        
        // console.log('Got back' + finaldest)

        $scope.newItem = {}; 
        $scope.myFile = '';
        };
}]);
