'use strict';

angular.module('myApp.dashboard', ['ngRoute', 'ngResource', 'chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', '$resource', function($scope, $resource) {
  $scope.todayDate = new Date();
  $scope.finishedCount = 27;
  $scope.finishedProjects = [
    {
      'id': 1,
      'name': 'Project1',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
    },
    {
      'id': 2,
      'name': 'Project2',
      'startDate': '01/02/2018',
      'finishDate': '01/08/2018',
    }
  ];

  $scope.inprogressCount = 12;
  $scope.inprogressProjects = [
    {
      'id': 3,
      'name': 'Project3',
      'stageName': 'Design',
      'progress': '55',
    },
    {
      'id': 4,
      'name': 'Project4',
      'stageName': '01/02/2018',
      'progress': '35',
    }
  ];

}]);
