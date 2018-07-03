function ArtistSearchController(AppService, $resource) {
  const ctrl = this;

  ctrl.searchArtist = function () {
    if (ctrl.search) {
      ctrl.searchResult = AppService
        .searchArtist($resource)
        .get({ 'artist': ctrl.search });
    } else {
      ctrl.searchResult = null;
    }
  };
}

angular
  .module('components.artist')
  .controller('ArtistSearchController', ArtistSearchController);