'use strict';

angular.module('myApp.artist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artist', {
    templateUrl: 'artist/artist.html',
    controller: 'ArtistCtrl'
  });
}])

.controller('ArtistCtrl', [function() {

}]);