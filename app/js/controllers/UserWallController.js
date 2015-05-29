'use strict';

app.controller('UserWallController', function ($scope, $routeParams, userService, postService, notifyService, PageSize) {
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

	$scope.loadFriendNews = function(username) {
		postService.loadFriendNews(
			username,
			function success (data) {
				$scope.news = data;
			},
			function error (error) {
				$(".news").html("Can not load posts.");
			}
		);
	};

	$scope.loadFriendNews($routeParams.username);

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

	$scope.likePost = function (id) {
		postService.likePost(
			id,
			function success() {
				$scope.loadFriendNews($routeParams.username);
				notifyService.showInfo("You liked this post.");
			},
			function (err) {
				notifyService.showError("Like post failed. You can not like post twice.");
			}
		);
	};

	$scope.unlikePost = function (id) {
		postService.unlikePost(
			id,
			function success() {
				$scope.loadFriendNews($routeParams.username);
				notifyService.showInfo("You disliked this post.");
			},
			function (err) {
				notifyService.showError("Dislike post failed. You can not dislike post twice.");
			}
		);
	};
});