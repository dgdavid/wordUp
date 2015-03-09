'use strict';

angular.module('wordUp', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap',
  'angularMoment', 'angular-lodash', 'picardy.fontawesome', 'iso-3166-country-codes',
  'wordUp.forvo'
  ])
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
