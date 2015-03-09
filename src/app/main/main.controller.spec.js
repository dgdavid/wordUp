'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('wordUp'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define dictionaries', inject(function($controller) {
    expect(scope.dictionaries).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.dictionaries)).toBeTruthy();
  }));
});
