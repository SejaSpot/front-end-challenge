function ArtistSimilarController(AppService, $resource, $stateParams) {
  const ctrl = this;

  ctrl.artistSimilar = AppService
    .artistSimilar($resource)
    .get({ 'artist': $stateParams.name });
}

angular
  .module('components.artist')
  .controller('ArtistSimilarController', ArtistSimilarController);