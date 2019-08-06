'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.apiSearcher'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'APIService', function($scope, APIService) {
  $scope.topArtists = false
  const topArtists = APIService.getTopArtists().then((response) => {
    $scope.topArtists = response.data.artists.artist.slice(0,5)

  })
}]);