'use strict';

// authService hold the business logic for user login, registration, logout, 
// will hold the currently logged-in user, whether it is normal user or administrator 
// and other user session related functionality

app.factory('authService', function ($http, baseServiceUrl) {
	return {
		login: function (userData, success, error) {
			// TODO
		},

		register: function (userData, success, error) {
			// TODO
		}, 

		logout: function() {
			// TODO
		},

		getCurrentUser: function() {
			// TODO
		},

		isAnonymous: function() {
			// TODO
		},

		isLoggedIn: function() {
			// TODO
		},
		
		isNormalUser: function() {
			// TODO
		},

		isAdmin: function() {
			// TODO
		},

		getAuthHeaders: function() {
			// TODO
		}
	}
});