function ArtistSearchController(AppService, $resource) {
  const ctrl = this;

  ctrl.searchArtist = function () {
    ctrl.result = AppService
      .searchArtist($resource)
      .query({ 'artist': ctrl.search });
  };
}

angular
  .module('components.artistSearch')
  .controller('ArtistSearchController', ArtistSearchController);