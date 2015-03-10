(function () {
  'use strict';
  angular.module('wordUp.pearson')
    .directive('pearsonSense', [pearsonSenseDirective]);

    function pearsonSenseDirective() {
      return {
        restrict: 'EA',
        templateUrl: 'components/pearson/pearson-sense.html',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          sense: '='
        },
        controller: PearsonSenseController
      }

      function PearsonController() {
        /* jshint: validthis */
        var vm = this;
      }
    }
}());

