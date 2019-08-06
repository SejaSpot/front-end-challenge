'use strict';

angular.module('myApp.artist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artist/:param/:id', {
    templateUrl: 'artist/artist.html',
    controller: 'ArtistCtrl'
  });
}])

.controller('ArtistCtrl', ['$scope', '$routeParams', 'APIService', function($scope, $routeParams, api) {
  
}]);