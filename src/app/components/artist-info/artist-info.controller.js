function ArtistInfoController(AppService, $resource, $stateParams) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.info = AppService
      .getArtistInfo($resource)
      .get({ 'artist': $stateParams.name });
  };
}

angular
  .module('components.artistInfo')
  .controller('ArtistInfoController', ArtistInfoController);