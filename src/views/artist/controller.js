export default [
  "$scope", "$routeParams", "lastfmFactory", "$resource",
  function ($scope, $routeParams, lastfmFactory, $resource) {
    lastfmFactory.artistTopTracks($resource).get({ artist: $routeParams.name }).$promise.then((res) => {
      $scope.tracks = res.toptracks.track;
    });

    lastfmFactory.artistTopAlbums($resource).get({ artist: $routeParams.name }).$promise.then((res) => {
      $scope.albums = res.topalbums.album;
    });

    lastfmFactory.artistSimilar($resource).get({ artist: $routeParams.name }).$promise.then((res) => {
      $scope.artists = res.similarartists.artist;
    });

    lastfmFactory.artistInfo($resource).get({ artist: $routeParams.name }).$promise.then((res) => {
      $scope.artist = res.artist;
    });
  }
];