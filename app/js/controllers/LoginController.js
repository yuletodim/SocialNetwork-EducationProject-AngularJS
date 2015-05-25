app.controller('LoginController', function ($scope, authService, notifyService) {
	$scope.login = function (userData) {
		authService.login(
			userData,
			function success() {
				notifyService.showInfo("Login successful!");
			},
			function error(err){
				notifyService.showError("The user name or password is incorrect.");
			}
		);
	};
});