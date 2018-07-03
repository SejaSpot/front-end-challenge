function ChartTopArtistsController(AppService, $resource) {
  const ctrl = this;

  ctrl.chartTopArtists = AppService
    .chartTopArtists($resource)
    .get();
}

angular
  .module('components.chart')
  .controller('ChartTopArtistsController', ChartTopArtistsController);