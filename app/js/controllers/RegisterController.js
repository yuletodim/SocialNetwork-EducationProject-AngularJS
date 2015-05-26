app.controller('RegisterController', function ($scope, $window, authService, notifyService) {
	$scope.register = function (userData) {
		authService.register(
			userData,
			function success() {
				notifyService.showInfo("Register successful! You are logged in.");
				setTimeout(function() { 
			    	$window.location.reload('/'); 
			    }, 2000);
			},
			function error(err){
				notifyService.showError("Register failed. ");
				console.log(JSON.parse(err));
			}
		);
	};
});