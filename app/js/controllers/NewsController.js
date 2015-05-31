'use strict';

app.controller('NewsController', function ($scope, userService, postService, notifyService, PageSize) {

	$scope.loadNews = function() {
		userService.getNewsFeedPage(
			function success (data) {
				$scope.news = data;
			},
			function error (error) {
				$(".news").html("Can not load posts.");
			}
		);
	};

	$scope.loadNews();

	$scope.likePost = function (id) {
		postService.likePost(
			id,
			function success() {
				$scope.loadNews();
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
				$scope.loadNews();
				notifyService.showInfo("You disliked this post.");
			},
			function (err) {
				notifyService.showError("Dislike post failed. You can not dislike post twice.");
			}
		);
	};

	$scope.editPost = function (postId, postContent) {
		var params = {
			"postContent": postContent
		};

		postService.editPost(
			postId, 
			params,
			function success () {
				notifyService.showInfo("You edited the post successfuly");
				$scope.loadNews();
			},
			function error (err) {
				notifyService.showError("Edit post failed.");
			}
		);
	}

	$scope.deletePost = function (postId) {
		postService.deletePost(
			postId,
			function success () {
				notifyService.showInfo("You deleted the post successfuly");
				$scope.loadNews();
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
				$scope.loadNews();
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
				$scope.loadNews();
			},
			function error (err) {
				notifyService.showError("Add comment failed.");
			}
		);

	}
});