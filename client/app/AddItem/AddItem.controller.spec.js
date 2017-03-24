'use strict';

describe('Controller: AddItemCtrl', function () {

  // load the controller's module
  beforeEach(module('libApp'));

  var AddItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddItemCtrl = $controller('AddItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
