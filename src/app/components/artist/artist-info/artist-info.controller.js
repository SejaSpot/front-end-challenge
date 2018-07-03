function ArtistInfoController(AppService, $resource, $stateParams) {
  const ctrl = this;

  ctrl.artistInfo = AppService
    .artistInfo($resource)
    .get({ 'artist': $stateParams.name });
}

angular
  .module('components.artist')
  .controller('ArtistInfoController', ArtistInfoController);