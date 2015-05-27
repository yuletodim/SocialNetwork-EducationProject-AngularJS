app.controller('ChangePasswordController', function ($scope, $location, userService, notifyService) {
	$scope.changePassword = function (userData) {
		userService.changePassword(
			userData,
			function success () {
				notifyService.showInfo("Password changed suuccessful.");
				$location.path('/');
			},
			function error (err) {
				notifyService.showError("Change password failed.");
			}
		);
	}
});