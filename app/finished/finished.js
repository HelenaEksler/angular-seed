'use strict';

angular.module('myApp.finished', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/finishedProjects', {
    templateUrl: 'finished/finished.html',
    controller: 'FinishedCtrl'
  });
}])

.controller('FinishedCtrl', ['$scope', '$resource', function($scope, $resource) {

  $scope.labels = ["Sales", "Concept", "Design", "Specs", "Development", "QA"];
  $scope.colors = ["#00bd5d", "#0300bd", "#bd009d", "#dccc09", "#00d8c4", "#d80000"];


  $scope.finishedProjects = [
    {
      'id': 1,
      'name': 'Project1',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'stages': [100, 80, 200, 300, 286]
    },
    {
      'id': 2,
      'name': 'Project2',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'stages': [100, 80, 200, 300, 286]
    },
    {
      'id': 3,
      'name': 'Project3',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'stages': [100, 80, 200, 300, 286]
    },
    {
      'id': 4,
      'name': 'Project4',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'stages': [100, 80, 200, 300, 286]
    },
    {
      'id': 5,
      'name': 'Project5',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'stages': [100, 80, 200, 300, 286]
    },
    {
      'id': 6,
      'name': 'Project6',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'stages': [100, 80, 200, 300, 286]
    }
  ];

}]);
