'use sctrict';

app.controller('ShowAllFriendsController', function ($scope, $routeParams, userService, notifyService, authService) {
	$scope.getUsersData = function (username) {
		userService.getUserData(
			username,
			function success (data) {
				$scope.user = data;
			},
			function error (err) {
				notifyService.showError("Can not load user data.");
			}
		);
	};

	$scope.getUsersData($routeParams.username);

	var currentUser = authService.getCurrentUser();
	var currentUsername = currentUser.userName;

	if($routeParams.username != currentUsername) {
		$scope.loadFriendFriendsPreview = function (username) {
			userService.getFriendFriendsPreview(
				username,
				function success (data) {
					$scope.friendsPreview = data.friends;
					$scope.countFriends = data.totalCount;
				},
				function error (err) {
					notifyService.showError("Can not load friend's friends.");
				}
			);
		};

		$scope.loadFriendFriendsPreview($routeParams.username);
	} else {
		userService.getOwnFriendsPreview(
			function success (data) {
				$scope.friendsPreview = data.friends;
				$scope.countFriends = data.totalCount;
			},
			function error (err) {
				notifyService.showError("Can not load friend's friends.");
			}
		);
	}
	
});