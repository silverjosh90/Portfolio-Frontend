var app = angular.module('moshe', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })
    .when('/resume', {
      templateUrl: 'pages/resume.html',
      controller: 'resumeController'
  })
    .when('/aboutme', {
      templateUrl: 'pages/aboutme.html',
      controller: 'aboutmecontroller'
  })
    .when('/projects', {
      templateUrl: 'pages/projects.html',
      controller: 'projectscontroller'
  })
    .when('/smiley-snake', {
      templateUrl: 'pages/smiley-snake.html',
      controller: 'projectscontroller'
  })
    .when('/sorting-hat', {
      templateUrl: 'pages/sortinghat.html',
      controller: 'projectscontroller'
  })
    .when('/abetterway', {
      templateUrl: 'pages/abetterway.html',
      controller: 'projectscontroller'
  })
    .when('/gslack', {
      templateUrl: 'pages/gslack.html',
      controller: 'projectscontroller'
  })
})
