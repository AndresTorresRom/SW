var tsEntertainmentApp = angular.module('tsEntertainmentApp', []);

tsEntertainmentApp.controller('VenuesListCtrl', function ($scope, $http) {	
	$http.get('https://swapi.co/api').success(function(data) {
		$scope.venues = data;
		
	});			
});