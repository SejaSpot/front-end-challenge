'use strict';

angular.module('myApp.artist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artist/:paramType/:param', {
    templateUrl: 'artist/artist.html',
    controller: 'ArtistCtrl'
  });
}])

.controller('ArtistCtrl', ['$scope', '$routeParams', 'APIService', function($scope, $routeParams, api) {
  api.getArtist($routeParams.param, $routeParams.paramType)
    .then(() => {
      $scope.artist = api.artist
      api.getArtistTopAlbums($scope.artist).then(
        () => $scope.artistAlbums = api.artistAlbums )
    })
  
}]);