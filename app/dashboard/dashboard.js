'use strict';

angular.module('myApp.dashboard', ['ngRoute', 'ngResource', 'chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', '$resource', '$rootScope', function($scope, $resource, $rootScope) {
  $scope.todayDate = new Date();
  $scope.finishedProjects = $rootScope.projects.filter(function(item) {
    return item.progress == 100;
  });
  $scope.inProgressProjects = $rootScope.projects.filter(function(item) {
    return item.progress != 100;
  });

}]);
