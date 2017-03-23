'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", { templateUrl: "partials/driver.html", controller: "driverController" }).
    when("/players/:id", { templateUrl: "partials/players.html", controller: "playersController" }).
    when("/teams", { templateUrl: "partials/teams.html", controller: "teamsController" }).
    when("/welcome", { templateUrl: "partials/welcome.html", controller: "welcomeController"}).
	otherwise({ redirectTo: '/welcome' });
}]);