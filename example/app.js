'use strict';

var app = angular.module('example', [
  'angular-timeline',
  'ngRoute'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/example", {
            templateUrl: "example.html",
            controller: "ExampleCtrl",
        });
});
