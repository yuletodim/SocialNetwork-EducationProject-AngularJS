'use strict';

app.controller('MainController', function ($scope, $window, authService, userService, notifyService) {
	$scope.anonymousUser = authService.isAnonymous();
	$scope.loggedUser = authService.isLoggedIn();
	
	if(authService.isLoggedIn()) {
		userService.getFullDataCurrentUser(
			function success (data) {
				$scope.currentUser = data;
			},
			function error (err) {
				console.error("Can not load user's data.");
			}
		);

		userService.getFriendRequest(
			function success (data) {
			if(!(data.length == 0)){
				$scope.newRequest = true;
			}
				$scope.dataRequest = data;	
				$scope.countRequest = data.length;		
			}
		);
	}
	
	$scope.sendFriendRequest = function (username) {
		userService.sendFriendRequest(
			username,
			function success () {
				notifyService.showInfo("Friend request sent successfuly.");
			},
			function error (err) {
				notifyService.showError("You couldn't send friend request.");
			}
		);
	}

	$scope.acceptFriendRequest = function (requestId) {
		var params = {
			"status": "approved"
		};

		userService.answerFriendRequest(
			requestId,
			params,
			function () {
				notifyService.showInfo("You aproved friend request.");

			},
			function error (err) {
				notifyService.showError("You couldn't aprove friend request.");
			}
		);
	}

	$scope.rejectFriendRequest = function (requestId) {
		var params = {
			"status": "rejected"
		};

		userService.answerFriendRequest(
			requestId,
			params,
			function () {
				notifyService.showInfo("You receted friend request.");
			},
			function error (err) {
				notifyService.showError("You couldn't reject friend request.");
			}
		);
	}

	$scope.showFriendRequests = function () {
		$('#requests-details').show();
	}

    $scope.logout = function() {
	    authService.logout();
	    notifyService.showInfo("You logged out.");
	    setTimeout(function() { 
	    	$window.location.reload('/'); 
	    }, 1000);
    };

});