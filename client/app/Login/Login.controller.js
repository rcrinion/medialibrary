'use strict';

/*
  Firebase is used for authentication purposes
  The controller and service below provide the functionality for the Login dialog box,
  and the handler to reach out to firebase with the username and password provided.

  This could be moved into the Node backend as a more secure mechanism if required.

*/

// Login Controller

angular.module('libApp')
  .controller('LoginCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {
   
  $scope.user = {};
  console.log('Controller Loaded');
  var path = '/Item';
  
  $scope.SignIn = function(e){ 
    e.preventDefault();
    var email = $scope.user.email;
    var password = $scope.user.password;
    authorize(email, password);
      if (authData)
        {
          token=authData;
          $location.path( path )  ;
        }
  };

   $scope.AddUser = function(e){ 
      e.preventDefault();
      var email = $scope.user.email;
      var password = $scope.user.password;
      register(email, password);
  };

    $scope.submit = function(path) 
      {
        authorize();
        if ($scope.authData)
        {
          $location.path( path ) ;
        } 
      };

    function authorize(uname, pword)
    {
        $scope.authData = null;
        $scope.error = null;
        ref.authWithPassword(
        {
          'email' : uname,
          'password' : pword
        }, authHandler,
        {
          remember: "sessionOnly"
        }
      );
    }

    function register(uname, pword)
    {
      $scope.authData = null;
      $scope.error = null;
		  ref.createUser({
		  'email': uname,
		  'password' : pword
		  }, function(error, userData) {
  			if (error) {
    			console.log('Error creating user:', error);
  			} else {
    			console.log('Successfully created user account with uid:', userData.uid);
  			}
    	});
    }


    function authHandler(error, authData) 
      {
        if (error) {
          console.log('Login Failed!', error);
        } else {
          console.log('Authenticated successfully with payload:', authData);
        }
      }
}]);


