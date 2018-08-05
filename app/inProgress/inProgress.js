'use strict';

angular.module('myApp.inProgress', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inprogressProjects', {
    templateUrl: 'inProgress/inProgress.html',
    controller: 'InProgressCtrl'
  });
}])

.controller('InProgressCtrl', ['$scope', '$resource', '$rootScope', function($scope, $resource, $rootScope) {

  $scope.inProgressProjects = $rootScope.projects.filter(function(item) {
    return item.progress != 100;
  });

}]);
