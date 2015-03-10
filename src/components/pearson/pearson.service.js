(function () {
  'use strict';

  angular.module('wordUp.pearson')
  .service('PearsonService', ['$q', '$http', 'TP_SERVICES', PearsonService]);

  function PearsonService($q, $http, TP_SERVICES) {
    /**
     * FIXME: allow to choose dictionary, set limit, offset, etc
     * Retrieves results for matchs with given word
     *
     * @param {String} word searched word
     * @returns {Promise}
     */
    this.findEntries = function (word) {
      var that = this;
      var defered = $q.defer();
      var endPoint = TP_SERVICES.pearson.baseUrl +
        '?headword=' + word + '&limit=3';

      $http.get(endPoint).success(function (result) {
        defered.resolve(result.results);
      });

      return defered.promise;
    };
  }
}());


