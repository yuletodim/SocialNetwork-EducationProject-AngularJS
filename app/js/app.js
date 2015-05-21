var app = angular.module('SocialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api ');

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/welcome.html',
		controller: 'HomeController'
	});

	$routeProvider.otherwise(
		{ redirectTo: '/' }
	);
});