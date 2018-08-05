'use strict';

angular.module('myApp.projectdash', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projectdash/:id', {
    templateUrl: 'projectdash/projectdash.html',
    controller: 'ProjectCtrl'
  });
}])

.controller('ProjectCtrl', ['$scope', '$resource', '$routeParams', '$rootScope', function($scope, $resource, $routeParams, $rootScope) {

  var projectId = $routeParams.id;
  // Get project data by id

  $scope.project = $rootScope.projects.filter(function(item) {
    return item.id == projectId;
  })[0];

  var stagesKeys = [
    'sales',
    'design',
    'dev',
    'qa',
  ];

  var activeStageId;
  stagesKeys.some(function(stage, i) {
    return stage == $scope.project.activeStage ? activeStageId = i : false;
  });

  var stages = {};
  angular.forEach($scope.project.stages, function(value, key) {

    stages[stagesKeys[key]]  = {
      'progress': activeStageId > key ? 100 : (activeStageId == key ? $scope.project.progress : 0),
      'totalHours': value,
      'startDate': '01/01/2018',
      'finishDate': activeStageId < key ? '18/01/2018' : '',
      'people': [
        'Helena Eksler',
        'Serge Rozenfeld',
        'Alexey Timoshchenko'
      ],
    }
  });

  $scope.project.stages = stages;
}]);
