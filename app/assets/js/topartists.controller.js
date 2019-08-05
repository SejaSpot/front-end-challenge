		var apiUrl = 'http://ws.audioscrobbler.com/2.0/';
		var apiKey = 'ee3d7f00f22d87ed4aa754efc9a2d989';

		// pega os artistas mais escutados
		var app = angular.module('myApp', []);
		app.controller('artistCtrl', function($scope, $http) {
		  $http.get(apiUrl +  '?method=chart.gettopartists&api_key=' + apiKey + '&format=json')
		  .then(function(response) {
		      $scope.topArtists = response.data.artists.artist;
		  });
		});