app.controller('LoginController', function ($scope, $window, authService, notifyService) {
	$scope.login = function (userData) {
		authService.login(
			userData,
			function success() {
				notifyService.showInfo("Login successful!");
				setTimeout(function() { 
			    	$window.location.reload('/'); 
			    }, 2000);
			},
			function error(err){
				notifyService.showError("The user name or password is incorrect.");
			}
		);
	};
});