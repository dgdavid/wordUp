(function () {
  'use strict';

  angular.module('wordUp.forvo')
  .service('ForvoService', ['$q', '$http', 'ISO3166', 'TP_SERVICES', ForvoService]);

  function ForvoService($q, $http, ISO3166, TP_SERVICES) {
    /**
     * FIXME: allow to set desired language
     * Retrieves results for given word
     *
     * @param {String} word searched word
     * @returns {Promise}
     */
    this.load = function (word) {
      var that = this;
      var defered = $q.defer();
      var endPoint = TP_SERVICES.forvo.baseUrl + word +
        '/language/en/key/' + TP_SERVICES.forvo.key +
        '?callback=JSON_CALLBACK';

      $http.jsonp(endPoint).success(function (result) {
        var items = _.map(result.items, function(item) {
          return that._prepareItem(item);
        });
        defered.resolve(items);
      });

      return defered.promise;
    };

    /**
     * Returns a better structured item than original received
     * @param {Object} item original received item
     * @returns {Object}  rebuilt item
     */
    this._prepareItem = function (item) {
      return {
        addedAt: moment(item.addtime).toDate(),
        hits: item.hits,
        language: { code: item.code, name: item.langname },
        sources: { mp3: item.pathmp3, ogg: item.pathogg },
        user: {
          name: item.username,
          sex: (item.sex == 'm' ? 'male' : 'female'),
          country: { code: ISO3166.getCountryCode(item.country), name: item.country }
        },
        votes: {
          total: item.num_votes,
          positives: item.num_positive_votes,
          rating: item.rate,
        }
      };
    };
  }
}());

