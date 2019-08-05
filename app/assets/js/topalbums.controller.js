var apiUrl = 'http://ws.audioscrobbler.com/2.0/';
var apiKey = 'ee3d7f00f22d87ed4aa754efc9a2d989';
var artist = 'queen'

// var app = angular.module('myApp', []);

app.controller('topAlbumsCtrl', function($scope, $http) {
	$http.get(apiUrl +  '?method=artist.gettopalbums&artist=' + artist + '&api_key=' + apiKey + '&format=json')
	.then(function(response) {
	$scope.topAlbums = response.data.topalbums.album;
	});
});