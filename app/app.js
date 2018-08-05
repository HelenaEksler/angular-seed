'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.dashboard',
  'myApp.finished',
  'myApp.inProgress',
  'myApp.version',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');

  // $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
