'use strict';

app.factory('postService', function ($http, baseServiceUrl, authService) {
	return{
		likePost: function (id, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/Posts/' + id + '/likes',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		},

		unlikePost: function (id, success, error) {
			var request = {
				method: 'DELETE',
				url: baseServiceUrl + '/api/Posts/' + id + '/likes',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		},

		loadFriendNews: function (username, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/' + username + '/wall?StartPostId=&PageSize=5',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		}
	}
});