(function () {
  'use strict';
  angular.module('wordUp.pearson')
    .directive('pearson', ['PearsonService', pearsonDirective]);

    function pearsonDirective(PearsonService) {
      return {
        restrict: 'EA',
        templateUrl: 'components/pearson/pearson.html',
        controllerAs: 'vm',
        bindToController: true,
        link: PearsonLink,
        scope: {
          word: '='
        },
        controller: PearsonController
      }

      function PearsonLink(scope, element, attr) {
        scope.$watch('vm.word', function() {
          scope.vm.loadWord()
        });
      }

      function PearsonController() {
        /* jshint: validthis */
        var vm = this;
        vm.searching = false;
        vm.items = undefined;

        vm.loadWord = loadWord;

        function loadWord() {
          var that = this;
          vm.searching = true;

          if (vm.word) {
            PearsonService.findEntries(vm.word).then(function (result) {
              vm.items = result;
              vm.searching = false;
            });
          }
        }
      }
    }
}());


