var apiUrl = 'http://ws.audioscrobbler.com/2.0/';
var apiKey = 'ee3d7f00f22d87ed4aa754efc9a2d989';

// pega as músicas mais escutadas

app.controller('topTracksCtrl', function($scope, $http) {
	$http.get(apiUrl +  '?method=chart.gettoptracks&api_key=' + apiKey + '&format=json')
	.then(function(response) {
	$scope.topTracks = response.data.tracks.track;
	});
});