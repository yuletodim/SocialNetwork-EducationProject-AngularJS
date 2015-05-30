'use strict';

app.controller('UserWallController', function ($scope, $routeParams, userService, postService, notifyService, authService, PageSize) {
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

	$scope.hasRights = function (currentUser, otherUser) {
		if(otherUser.username == currentUser.userName || otherUser.isFriend){
			return true;
		} else {
			return false;
		}
	}

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

	$scope.addNewPost = function (newPost) {
		var usernamePost = $routeParams.username;
		var data = {
			"postContent": newPost,
			"username": usernamePost
		}

		postService.addNewPost(
			data,
			function success () {
				notifyService.showInfo("You published new post successfuly.");
				setTimeout(
					$scope.loadFriendNews($routeParams.username), 
					2000);
			},
			function error (err) {
				notifyService.showError("Publishing new post failed.");
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

});