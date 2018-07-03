function ArtistTopTracksController(AppService, $resource, $stateParams) {
  const ctrl = this;

  ctrl.artistTopTracks = AppService
    .artistTopTracks($resource)
    .get({ 'artist': $stateParams.name });
}

angular
  .module('components.artist')
  .controller('ArtistTopTracksController', ArtistTopTracksController);