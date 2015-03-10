(function () {
  'use strict';
  angular.module('wordUp.forvo')
    .directive('forvoItem', [forvoItemDirective]);

    function forvoItemDirective() {
      return {
        restrict: 'EA',
        templateUrl: 'components/forvo/forvo-item.html',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          item: '='
        },
        controller: ForvoItemController
      }

      function ForvoItemController() {
        /* jshint: validthis */
        var vm = this;

        vm.user = vm.item.user;
        vm.country = vm.item.user.country;
        vm.votes = vm.item.votes;
      }
    }
}());

