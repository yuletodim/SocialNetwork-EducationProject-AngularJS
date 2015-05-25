'use strict';

app.controller('MainController', function ($scope, authService) {
	$scope.welcomeMessage = "Welcome to the Project!";

	// make authService available from every point of the app
	//$scope.authService = authService;

});