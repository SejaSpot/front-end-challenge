function TopTracksController(AppService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopTracks = AppService
      .getTopTracks($resource)
      .get();
  };
}

angular
  .module('components.topTracks')
  .controller('TopTracksController', TopTracksController);