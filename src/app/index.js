'use strict';

angular.module('wordUp', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap',
  'angularMoment', 'angular-lodash'
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
