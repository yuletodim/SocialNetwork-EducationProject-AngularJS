'use strict';

app.controller('EditPostController', function ($scope, $routeParams, $location, postService, notifyService) {
	
	$scope.postData = {};

	function getPostById(id) {
        postService.getPostById(
            id,
            function success(data) {
                $scope.postData = data;
                console.log(data);
            },
            function error(err) {
                notifyService.showError("Cannot load post.");
            }
        );
    }

    getPostById($routeParams.id);

    $scope.editPost = function(postData) {
    	console.log(postData.postContent);
        postService.editPost(
        	postData,
            function success() {
                notifyService.showInfo("Edited this post successfuly");
                $location.path("/");
            },
            function error(err) {
                notifyService.showError("Edit post failed.");
            }
        );
    };
});