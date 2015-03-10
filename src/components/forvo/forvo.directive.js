(function () {
  'use strict';
  angular.module('wordUp.forvo')
    .directive('forvo', ['ForvoService', forvoDirective]);

    function forvoDirective(ForvoService) {
      return {
        restrict: 'EA',
        templateUrl: 'components/forvo/forvo.html',
        controllerAs: 'vm',
        bindToController: true,
        link: ForvoLink,
        scope: {
          word: '='
        },
        controller: ForvoController
      }

      function ForvoLink(scope, element, attr) {
        scope.$watch('vm.word', function() {
          scope.vm.loadWord()
        });
      }

      function ForvoController() {
        /* jshint: validthis */
        var vm = this;

        vm.sortOrders = [
          { predicate: 'addedAt', caption: 'Por fecha de publicación' },
          { predicate: 'votes.rating', caption: 'Por puntuación' },
          { predicate: 'votes.total', caption: 'Por votos totales' },
          { predicate: 'votes.positives', caption: 'Por votos positivos' },
          { predicate: 'hits', caption: 'Por reproducciones' }
        ];
        vm.sortDirections = [
          { caption: 'DESC', value: true },
          { caption: 'ASC', value: false }
        ];
        vm.orderBy = vm.sortOrders[0];
        vm.orderDirection = vm.sortDirections[0];

        vm.loadWord = loadWord;

        function loadWord() {
          var that = this;

          if (vm.word) {
            ForvoService.load(vm.word).then(function (result) {
              vm.items = result;
            });
          }
        }
      }
    }
}());

