'use strict';

var app = angular.module('SocialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

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

	$routeProvider.when('/users/:username',{
		templateUrl: 'templates/user-wall/userWall.html',
		controller: 'UserWallController'		
	})

	$routeProvider.when('/users/:username/friends',{
		templateUrl: 'templates/friends.html'	
	})

	$routeProvider.when('/posts/:id',{
		templateUrl: 'templates/partials/editPost.html',
		controller: 'EditPostController'	
	})

	$routeProvider.otherwise(
		{ redirectTo: '/' }
	);
});

