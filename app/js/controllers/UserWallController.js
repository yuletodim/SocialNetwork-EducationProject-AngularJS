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

	$scope.loadUserNews = function(username) {
		postService.loadUserNews(
			username,
			function success (data) {
				$scope.news = data;
			},
			function error (error) {
				$(".news").html("Can not load posts.");
			}
		);
	};

	$scope.loadUserNews($routeParams.username);

	$scope.likePost = function (id) {
		postService.likePost(
			id,
			function success() {
				$scope.loadUserNews($routeParams.username);
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
				$scope.loadUserNews($routeParams.username);
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
				$scope.loadUserNews($routeParams.username);
				$("#new-post").val("");
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

	$scope.deletePost = function (postId) {
		postService.deletePost(
			postId,
			function success () {
				notifyService.showInfo("You deleted the post successfuly");
				$scope.loadUserNews($routeParams.username);
			},
			function error (err) {
				notifyService.showError("Delete post failed.");
			}
		);
	};

	$scope.commentData = {};

	$scope.getPostComent = function (id) {
		postService.getPostComent(
			id,
			function success (data, id) {
				$scope.coments = data;
				$scope.commentData.id = id;
				console.log($scope.commentData.id);
				$("#coments-box").show();
				$scope.loadUserNews($routeParams.username);
			},
			function error (err) {
				notifyService.showError("Load coments failed.");
			}
		);
	}

	$scope.closePostComents = function () {
		$("#coments-box").hide();
	}

	$scope.addComment = function (commentData) {
		postService.addComment(
			commentData,
			function success () {
				notifyService.showInfo("You add comment successfuly.");
				$scope.loadUserNews($routeParams.username);
			},
			function error (err) {
				notifyService.showError("Add comment failed.");
			}
		);

	}

});