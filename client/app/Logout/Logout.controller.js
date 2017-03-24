'use strict';

/*
  Firebase is used for authentication purposes
  The controller and service below provide the functionality for the Login/Logout 
  dialog box,  and the handler to reach out to firebase with the username and password
  provided.

  This could be moved into the Node backend as a more secure mechanism if required.

*/

// Logout Controller

angular.module('libApp')
  .controller('LogoutCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {
   
  $scope.user = {};
  console.log('Controller Loaded');
  var path = '/Item';

    $scope.stayHere = function(){
      var path = '/Item';

      $location.path( path );

    }

    $scope.logout = function(){
      
      var path = '/Login';
      if (authData)
        {
          ref.unauth();
          authData={};
        }
      
      $location.path( path );
    }
}]);


