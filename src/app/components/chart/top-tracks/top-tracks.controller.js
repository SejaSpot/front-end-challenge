function TopTracksController(ChartService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopTracks = ChartService
      .getTopTracks($resource)
      .query();
  };
}

angular
  .module('components.chart')
  .controller('TopTracksController', TopTracksController);