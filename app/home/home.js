'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.apiSearcher'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'APIService', function($scope, api) {
  api.getTopArtists().then(() => {
    $scope.topArtists = api.topArtists
  })

  api.getTopTracks().then(() => {
    window.test = api.topTracks
    $scope.topTracks = [
      [api.topTracks[0], api.topTracks[1], api.topTracks[2]],
      [api.topTracks[3], api.topTracks[4], api.topTracks[5]],
      [api.topTracks[6], api.topTracks[7], api.topTracks[8]]
    ]
    console.log($scope.topTracks)
  })
}]);