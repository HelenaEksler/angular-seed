'use strict';

angular.module('myApp.finished', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/finishedProjects', {
    templateUrl: 'finished/finished.html',
    controller: 'FinishedCtrl'
  });
}])

.controller('FinishedCtrl', ['$scope', '$resource', '$rootScope', function($scope, $resource, $rootScope) {

  $scope.finishedProjects = $rootScope.projects.filter(function(item) {
    return item.progress == 100;
  });
  // $scope.finishedProjects = [
  //   {
  //     'id': 1,
  //     'name': 'Human resource share application',
  //     'startDate': '01/01/2018',
  //     'finishDate': '01/06/2018',
  //     'totalHours': 856,
  //     'users': 10,
  //     'stages': [100, 0, 200, 0, 300, 286]
  //   },
  //   {
  //     'id': 2,
  //     'name': 'Digital currency trade platform',
  //     'startDate': '01/01/2018',
  //     'finishDate': '01/06/2018',
  //     'totalHours': 856,
  //     'users': 10,
  //     'stages': [100, 0, 200, 0, 300, 286]
  //   },
  //   {
  //     'id': 3,
  //     'name': 'Work hours mobile app',
  //     'startDate': '01/01/2018',
  //     'finishDate': '01/06/2018',
  //     'totalHours': 856,
  //     'users': 10,
  //     'stages': [100, 0, 200, 0, 300, 286]
  //   },
  //   {
  //     'id': 4,
  //     'name': 'Organization atmosphere check system',
  //     'startDate': '01/01/2018',
  //     'finishDate': '01/06/2018',
  //     'totalHours': 856,
  //     'users': 10,
  //     'stages': [100, 0, 200, 0, 300, 286]
  //   },
  //   {
  //     'id': 5,
  //     'name': 'Visual Project Dashboard',
  //     'startDate': '01/01/2018',
  //     'finishDate': '01/06/2018',
  //     'totalHours': 856,
  //     'users': 10,
  //     'stages': [100, 0, 200, 0, 300, 286]
  //   },
  //   {
  //     'id': 6,
  //     'name': 'Project6',
  //     'startDate': '01/01/2018',
  //     'finishDate': '01/06/2018',
  //     'totalHours': 856,
  //     'users': 10,
  //     'stages': [100, 0, 200, 0, 300, 286]
  //   }
  // ];

}]);
