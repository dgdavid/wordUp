'use strict';

angular.module('wordUp', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap',
  'angularMoment', 'angular-lodash', 'picardy.fontawesome', 'iso-3166-country-codes',
  'wordUp.forvo'
  ])
  .constant('TP_SERVICES', {
    forvo: {
      baseUrl: 'http://apifree.forvo.com/action/word-pronunciations/format/json/word/',
      key: 'forvoApiKey'
    }
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;

angular.module('wordUp.forvo', []);

