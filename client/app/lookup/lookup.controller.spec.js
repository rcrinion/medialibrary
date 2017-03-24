'use strict';

describe('Controller: LookupCtrl', function () {

  // load the controller's module
  beforeEach(module('libApp'));

  var LookupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LookupCtrl = $controller('LookupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
