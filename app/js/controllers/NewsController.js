'use strict';

app.controller('NewsController', function ($scope, userService, postService, notifyService, PageSize) {
	// $scope.newsParams = {
	// 	"StartPostId": null,			
	// 	"PageSize": PageSize	
	// };

	$scope.loadNews = function() {
		userService.getNewsFeedPage(
			//$scope.newsParams,
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


});