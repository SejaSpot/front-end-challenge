function ChartTopTracksController(AppService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.chartTopTracks = AppService
      .chartTopTracks($resource)
      .get();
  };
}

angular
  .module('components.chart')
  .controller('ChartTopTracksController', ChartTopTracksController);