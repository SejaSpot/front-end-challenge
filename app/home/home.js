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
  
}]);