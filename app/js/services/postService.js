'use strict';

app.factory('postService', function ($http, baseServiceUrl, authService) {
	return{
		likePost: function (id, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + 'api/Posts/' + id + '/likes',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		}
	}
});