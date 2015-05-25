'use strict';

var app = angular.module('SocialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		//controller: 'HomeController'
	});

	$routeProvider.otherwise(
		{ redirectTo: '/' }
	);
});