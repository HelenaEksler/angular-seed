'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.dashboard',
  'myApp.finished',
  'myApp.inProgress',
  'myApp.projectdash',
  'myApp.version',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');


}]).
run(function($rootScope, $resource){
  $rootScope.labels = ["Sales", "Design", "Development", "QA"];
  $rootScope.colors = ["#fff78c", "#8beafb", "#bef78a", "#fad08b"];
  $rootScope.icons = {
    'sales': 'glyphicon-usd',
    'design': 'glyphicon-pencil',
    'dev': 'glyphicon-cog',
    'qa': 'glyphicon-wrench',
  };
  $rootScope.stageLabels = {
    'sales': 'Sales',
    'design': 'Design',
    'dev': 'Development',
    'qa': 'QA',
  };

  var projectsDash = $resource('http://vpdashboard/api/Dashboard/Login', {}, {
        get: {method: "GET", cache: false}
    });
  projectsDash.get({
    'UserName': 'Helena',
    'Password': 'test',
    'IsDeleted': false,
    'RoleId': 1,
  }).$promise.then(function(data) {
      $rootScope.data = data;
  });


  $rootScope.projects = [
    {
      'id': 1,
      'name': 'Human resource share application',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'activeStage': 'design',
      'progress': 35,
      'stages': [100, 200, 300, 286]
    },
    {
      'id': 2,
      'name': 'Digital currency trade platform',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'activeStage': 'dev',
      'progress': 55,
      'stages': [100, 200, 300, 286]
    },
    {
      'id': 3,
      'name': 'Work hours mobile app',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'activeStage': 'qa',
      'progress': 80,
      'stages': [100, 200, 300, 286]
    },
    {
      'id': 4,
      'name': 'Organization atmosphere check system',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'activeStage': 'dev',
      'progress': 80,
      'stages': [100, 200, 300, 286]
    },
    {
      'id': 5,
      'name': 'Visual Project Dashboard',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'activeStage': 'qa',
      'progress': 100,
      'stages': [100, 200, 300, 286]
    },
    {
      'id': 6,
      'name': 'Some finished Project',
      'startDate': '01/01/2018',
      'finishDate': '01/06/2018',
      'totalHours': 856,
      'users': 10,
      'activeStage': 'qa',
      'progress': 100,
      'stages': [100, 200, 300, 286]
    }
  ];


});
