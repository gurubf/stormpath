'use strict';

describe('Controller: ForgotCtrl', function () {

  // load the controller's module
  beforeEach(module('stormpathIdpApp'));

  var ForgotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgotCtrl = $controller('ForgotCtrl', {
      $scope: scope
    });
  }));

  it('should initially set scope.sent to false', function () {
    expect(scope.sent).to.equal(false);
  });
});
