function TopAlbumsController(AppService, $resource, $stateParams) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopAlbums = AppService
      .getTopAlbums($resource)
      .get({ 'artist': $stateParams.name });
  };
}

angular
  .module('components.topAlbums')
  .controller('TopAlbumsController', TopAlbumsController);