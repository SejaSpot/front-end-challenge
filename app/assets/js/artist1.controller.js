var apiUrl = 'http://ws.audioscrobbler.com/2.0/';
var apiKey = 'ee3d7f00f22d87ed4aa754efc9a2d989';
var artist = 'BillieEilish'
// pega as músicas mais escutadas

var app = angular.module('myApp', []);
app.controller('artistInfo', function($scope, $http) {
	$http.get(apiUrl +  '?method=artist.getinfo&artist=' + artist + '&api_key=' + apiKey + '&format=json')
	.then(function(response) {
	$scope.info = response.data.artist;
	});
});