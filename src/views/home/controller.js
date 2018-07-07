export default [
  "$scope", "$resource", "lastfmFactory",
  function ($scope, $resource, lastfmFactory) {
    lastfmFactory.chartTopArtists($resource).get().$promise.then((res) => {
      $scope.artists = res.artists.artist;
    });

    lastfmFactory.chartTopTracks($resource).get().$promise.then((res) => {
      $scope.musics = res.tracks.track;
    });
  }
];