app.controller('FriendsController', function ($scope, userService, notifyService) {
	userService.getOwnFriendsPreview(
		function success (data) {
			$scope.friendsPreview = data.friends;
			$scope.countFriends = data.totalCount;
		},
		function error (err) {
			notifyService.showError("Can not load friends.");
		});
});