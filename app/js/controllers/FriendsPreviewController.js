app.controller('FriendsPreviewController', function ($scope, userService, notifyService) {
	userService.getOwnFriendsPreview(
		function success (data) {
			$scope.friendsPreview = data.friends;
			$scope.countFriends = data.totalCount;
		},
		function error (err) {
			$(".friends").html('<p>Can not load friends.</p>');
		});
});