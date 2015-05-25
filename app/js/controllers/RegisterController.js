app.controller('RegisterController', function ($scope, authService, notifyService) {
	$scope.register = function (userData) {
		authService.register(
			userData,
			function success() {
				notifyService.showInfo("Register successful! You are logged in.");
				console.log(userData);
			},
			function error(err){

				notifyService.showError("Register failed. ");
				console.log(JSON.parse(err));
			}
		);
	};
});