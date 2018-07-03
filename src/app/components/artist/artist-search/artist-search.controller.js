function ArtistSearchController(AppService, $resource) {
  const ctrl = this;

  ctrl.searchResult = AppService
    .searchArtist($resource)
    .get({ 'artist': ctrl.search });
}

angular
  .module('components.artist')
  .controller('ArtistSearchController', ArtistSearchController);