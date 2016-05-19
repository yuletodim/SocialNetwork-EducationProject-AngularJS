'use strict';

app.factory('postService', function ($http, baseServiceUrl, authService) {
	return {
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

		loadUserNews: function (username, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/' + username + '/wall?StartPostId=&PageSize=5',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		}, 

		addNewPost: function (data, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/posts',
				headers: authService.getAuthHeaders(),
				data: data
			};
			$http(request).success(success).error(error);
		},

		editPost: function (postData, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/Posts/' + postData.id,
				headers: authService.getAuthHeaders(),
				data: { "postContent" : postData.postContent}
			};
			$http(request).success(success).error(error);
		},

		deletePost: function (postId, success, error) {
			var request = {
				method: 'DELETE',
				url: baseServiceUrl + '/api/Posts/' + postId,
				headers: authService.getAuthHeaders(),
			};
			$http(request).success(success).error(error);
		},

		getPostById: function (id, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/Posts/' + id,
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		},

		getPostComent: function (id, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/posts/' + id + '/comments',
				headers: authService.getAuthHeaders()
			};
			$http(request).success(success).error(error);
		},

		addComment: function (commentData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/posts/' + commentData.id + '/comments',
				headers: authService.getAuthHeaders(),
				data: { "commentContent" : commentData.commentContent}
			};
			$http(request).success(success).error(error);
		}
	}
});
