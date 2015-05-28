'use strict';

app.controller('NewsController', function ($scope, userService, postService, notifyService, PageSize) {
	// $scope.newsParams = {
	// 	"StartPostId": null,			
	// 	"PageSize": PageSize	
	// };

	userService.getNewsFeedPage(
		//$scope.newsParams,
		function success (data) {
			$scope.news = data;
		},
		function error (error) {
			$(".news").html("Can not load posts.");
		}
	);

	// $scope.reloadNews = function () {
		
	// }

	// $scope.reloadNews();

	$scope.likePost = function (id) {
		postService.likePost(id,
			function success() {
				notifyService.showInfo("You liked this post.");
			},
			function (err) {
				notifyService.showError("Like post failed.");
			}
		);
	};


});