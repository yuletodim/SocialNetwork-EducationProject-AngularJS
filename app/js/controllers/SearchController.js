'use strict';
app.controller('SearchController', function ($scope, userService, notifyService) {
	$scope.searchUser = function (username) {
		var searchParams =  {
			"searchTerm": username
		}

		userService.searchUser(
			searchParams,
			function success (data) {
				$scope.searchResults = data;
				$scope.resultsCount = data.length;
				$('#search-results').show();
			},
			function error (err) {
				notifyService.showError("Searching failed.");
			}
		)


	}
});