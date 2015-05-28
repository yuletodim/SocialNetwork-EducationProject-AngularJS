app.controller('EditProfileController', function ($scope, $location, userService, notifyService) {
	$scope.userData = {};

	$scope.fileSelectedImg = function (fileInputField) {
		delete $scope.userData.profileImageData;
		var file = fileInputField.files[0];
		if(file.type.match(/image\/.*/)){
			var reader = new FileReader();
			reader.onload = function () {
				$scope.userData.profileImageData = reader.result;
				$(".image-box").html("<img src='" + reader.result + "'/>");
			}
			reader.readAsDataURL(file);
		} else {
			$(".image-box").html("<p>File type not suproted.</p>");
		}
	}

	$scope.fileSelectedWallImg = function (fileInputField) {
		delete $scope.userData.coverImageData;
		var file = fileInputField.files[0];
		if(file.type.match(/image\/.*/)){
			var reader = new FileReader();
			reader.onload = function () {
				$scope.userData.coverImageData = reader.result;
				$(".image-box-big").html("<img src='" + reader.result + "'/>");
			}
			reader.readAsDataURL(file);
		} else {
			$(".image-box-big").html("<p>File type not suproted.</p>");
		}
	}

	$scope.editProfile = function (userData) {
		userService.editProfile(
			userData,
			function success () {
				notifyService.showInfo("Profile changes saved.");
				$location.path('/');
			},
			function error (err) {
				notifyService.showError("Editing profile failed. Email is already taken or can not load images.");
				console.log(JSON.parse(err));
			}
		);
	}
});