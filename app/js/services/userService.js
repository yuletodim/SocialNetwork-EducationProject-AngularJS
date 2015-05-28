'use strict';
app.factory('userService', function ($http, baseServiceUrl, authService) {
	return {
		getNewsFeedPage: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
				headers: authService.getAuthHeaders(),
				//params: params
			};
			$http(request).success(success).error(error);
		},

		getOwnFriends: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me/friends',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		}, 

		getOwnFriendsPreview: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me/friends/preview',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		},

		getFullDataCurrentUser: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me',
				headers: authService.getAuthHeaders()
			};

			$http(request).success(success).error(error);
		},

		editProfile: function (userData, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me',
				headers: authService.getAuthHeaders(),
				data: userData
			};
			$http(request).success(success).error(error);
		},

		changePassword: function (userData, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me/changepassword',
				headers: authService.getAuthHeaders(),
				data: userData
			};
			$http(request).success(success).error(error);
		},

		searchUser: function (params, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/search',
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		}

	}
});

