'use strict';

app.controller('NewsController', function ($scope, userService, notifyService, PageSize) {
	// $scope.newsParams = {
	// 	"StartPostId": null,			
	// 	"PageSize": PageSize	
	// };

	$scope.reloadAds = function () {
		userService.getNewsFeedPage(
			//$scope.newsParams,
			function successFunction (data) {
				$scope.news = data;
				console.log(data);
			},
			function errorFunction (error) {
				notifyService.showError("Can not load news", error)
			}
		);
		
	}

	$scope.reloadAds();
});