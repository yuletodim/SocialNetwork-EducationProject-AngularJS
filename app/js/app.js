'use strict';

var app = angular.module('SocialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('PageSize', 5);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
	});

	$routeProvider.when('/profile', {
		templateUrl: 'templates/user/editProfile.html',
		controller: 'EditProfileController'
	});

	$routeProvider.when('/profile/password', {
		templateUrl: 'templates/user/changePassword.html',
		controller: 'ChangePasswordController'
	});

	$routeProvider.otherwise(
		{ redirectTo: '/' }
	);
});