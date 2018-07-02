function TopTracksController(AppService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopTracks = AppService
      .getTopTracks($resource)
      .query();
  };
}

angular
  .module('components.topTracks')
  .controller('TopTracksController', TopTracksController);