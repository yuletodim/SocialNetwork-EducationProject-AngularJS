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

	}
});

// createNewAd: function (adData, success, error) {
// 			var request = {
// 				method: 'POST',
// 				url: baseServiceUrl + '/api/user/ads',
// 				headers: authService.getAuthHeaders(),
// 				data: adData
// 			};
// 			$http(request).success(success).error(error);
// 		},
// 		getUserAds: function (params, success, error) {
// 			var request = {
// 				method: 'GET',
// 				url: baseServiceUrl + '/api/user/ads',
// 				headers: authService.getAuthHeaders(),
// 				params: params
// 			};
// 			$http(request).success(success).error(error);
// 		},
// 		deactivateAd: function (id, success, error) {
// 			var request = {
//                     method: 'PUT',
//                     url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
//                     headers: authService.getAuthHeaders()
//                 };
//                 $http(request).success(success).error(error);
//             },

//         publishAgainAd: function (id, success, error) {
//             var request = {
//                 method: 'PUT',
//                 url: baseServiceUrl + '/api/user/ads/publishagain/' + id,
//                 headers: authService.getAuthHeaders()
//             };
//             $http(request).success(success).error(error);
//         }
