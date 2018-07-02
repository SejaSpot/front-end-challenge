function TopArtistsController(ChartService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopArtists = ChartService
      .getTopArtists($resource)
      .query();
  };
}

angular
  .module('components.chart')
  .controller('TopArtistsController', TopArtistsController);