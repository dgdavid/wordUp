'use strict';

angular.module('wordUp', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap',
  'angularMoment', 'angular-lodash', 'picardy.fontawesome', 'iso-3166-country-codes',
  'angular.filter',
  'wordUp.forvo', 'wordUp.pearson'
  ])
  .constant('TP_SERVICES', {
    forvo: {
      baseUrl: 'http://apifree.forvo.com/action/word-pronunciations/format/json/word/',
      key: 'forvoApiKey'
    },
    pearson : {
      baseUrl: 'https://api.pearson.com:443/v2/dictionaries/laes/entries',
      key: 'pearsonApiKey'
    }
  })
  .config(function ($routeProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $sceDelegateProvider
      .resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(apifree.)?forvo\.com/.+$')]);
  })
;

angular.module('wordUp.forvo', []);
angular.module('wordUp.pearson', []);

