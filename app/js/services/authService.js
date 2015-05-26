'use strict';

// authService holds the logic for user login, registration, logout and all user session related functionality
app.factory('authService', function ($http, baseServiceUrl) {
	return {
		login: function (userData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/users/login',
				data: userData
			};
			$http(request)
				.success(function (data) {
					sessionStorage['currentUser'] = JSON.stringify(data);
					success(data);
				})
				.error(error);
		},

		register: function (userData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/users/register',
				data: userData
			};
			$http(request)
				.success(function (data) {
					sessionStorage['currentUser'] = JSON.stringify(data);
					success(data);
				})
				.error(error);
		}, 

		logout: function() {
			delete sessionStorage['currentUser'];
		},

		getCurrentUser: function() {
			var user = sessionStorage['currentUser'];
			if(user) {
				return JSON.parse(sessionStorage['currentUser']);
			}
		},

		isAnonymous: function() {
			return sessionStorage['currentUser'] == undefined;
		},

		isLoggedIn: function() {
			return sessionStorage['currentUser'] != undefined;
		},

		getAuthHeaders: function() {
			var headers = {};
			var currentUser = this.getCurrentUser();
			if(currentUser){
				headers['Authorization'] = 'Bearer ' + currentUser.access_token;
			}

			return headers;
		}
	}
});