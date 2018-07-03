function TopArtistsController(AppService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopArtists = AppService
      .getTopArtists($resource)
      .get();
  };
}

angular
  .module('components.topArtists')
  .controller('TopArtistsController', TopArtistsController);