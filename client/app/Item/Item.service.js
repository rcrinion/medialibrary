'use strict';

angular.module('libApp')
  .factory('itemsService', ['$http' , function($http)
  {
    var api = 
      {
        getItems : function()
        {
          console.log('Getting full list of items');
          return $http.get('/api/medialib');
        },
        getbook : function(itemId) 
        {
          console.log('Sending:/api/medialib/' + itemId);
          return $http.get('/api/medialib/' + itemId);
        },
        getAlbum : function(itemId) 
        {
          console.log('Sending:/api/medialib/' + itemId);
          return $http.get('/api/medialib/' + itemId);
        },
        getfilm : function(itemId) 
        {
          console.log('Sending:/api/medialib/' + itemId);
          return $http.get('/api/medialib/' + itemId);
        }
      };
    return api;
  }]);
