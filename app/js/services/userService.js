'use strict';
app.factory('userService', function ($http, baseServiceUrl, authService) {
	return {
		getNewsFeedPage: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me/feed?StartPostId=0&PageSize=5',
				headers: authService.getAuthHeaders(),
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

		getFriendFriendsPreview: function (username, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/' + username + '/friends/preview',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);			
		},

		getFriendFriends: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/' + username + '/friends',
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
		}, 

		getUserData: function (username, success, error) {
		 	var request = {
		 		method: 'GET',
		 		url: baseServiceUrl + '/api/users/' + username,
		 		headers: authService.getAuthHeaders()
		 	};
		 	$http(request).success(success).error(error);
		},

		sendFriendRequest: function (username, success, error) {
		 	var request = {
		 		method: 'POST',
		 		url: baseServiceUrl + '/api/me/requests/' + username,
		 		headers: authService.getAuthHeaders(),
		 	};
		 	$http(request).success(success).error(error);
		},

		answerFriendRequest: function (requestId, params, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me/requests/' + requestId,
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		},

		getFriendRequest: function (success, error) {
		 	var request = {
		 		method: 'GET',
		 		url: baseServiceUrl + '/api/me/requests',
		 		headers: authService.getAuthHeaders()
		 	};
		 	$http(request).success(success).error(error);
		 }
	}
});

