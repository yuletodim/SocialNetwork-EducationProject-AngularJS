'use strict';

app.controller('MainController', function ($scope, $window, authService, notifyService) {
	$scope.anonymousUser = authService.isAnonymous();
	$scope.loggedUser = authService.isLoggedIn();

    $scope.logout = function() {
	    authService.logout();
	    notifyService.showInfo("You logged out.");
	    setTimeout(function() { 
	    	$window.location.reload('/'); 
	    }, 2000);
	   
    };

});