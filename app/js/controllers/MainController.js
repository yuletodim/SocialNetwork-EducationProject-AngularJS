'use strict';

app.controller('MainController', function ($scope, $window, authService, userService, notifyService) {
	$scope.anonymousUser = authService.isAnonymous();
	$scope.loggedUser = authService.isLoggedIn();
	
	userService.getFullDataCurrentUser(
		function success (data) {
			$scope.currentUser = data;
		},
		function error (err) {
			console.error("Can not load user's data.");
		});

    $scope.logout = function() {
	    authService.logout();
	    notifyService.showInfo("You logged out.");
	    setTimeout(function() { 
	    	$window.location.reload('/'); 
	    }, 2000);
    };

});