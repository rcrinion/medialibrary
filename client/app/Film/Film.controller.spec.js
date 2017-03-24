'use strict';

describe('Controller: FilmCtrl', function () {

  // load the controller's module
  beforeEach(module('libApp'));

  var FilmCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilmCtrl = $controller('FilmCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
