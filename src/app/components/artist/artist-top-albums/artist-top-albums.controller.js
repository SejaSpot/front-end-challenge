function ArtistTopAlbumsController(AppService, $resource, $stateParams) {
  const ctrl = this;

  ctrl.artistTopAlbums = AppService
    .artistTopAlbums($resource)
    .get({ 'artist': $stateParams.name });
}

angular
  .module('components.artist')
  .controller('ArtistTopAlbumsController', ArtistTopAlbumsController);