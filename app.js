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
})
