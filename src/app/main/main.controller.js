'use strict';

angular.module('wordUp')
  .controller('MainCtrl', function ($scope) {
    var mvm = this;
    mvm.word = undefined;
    mvm.dictionaries = [];

    $scope.$watch('mvm.word', function (newValue, oldValue) {
      if (newValue) {
        console.info('Word has changed from ' + oldValue + ' to ' + newValue);
      }
    });
  });
