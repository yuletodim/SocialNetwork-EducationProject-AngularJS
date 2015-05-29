'use strict';

app.controller('FriendFriendsController', function ($scope, $routeParams, userService, postService, notifyService, PageSize) {
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
});