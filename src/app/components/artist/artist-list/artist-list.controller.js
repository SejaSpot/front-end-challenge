function ArtistListController(ArtistService, $resource) {
  const ctrl = this;

  ctrl.$onInit = function () {
    ctrl.getTopArtists = ArtistService
      .getTopArtists($resource)
      .query();
  };

  // ctrl.$onInit = function () {
  //   ctrl.tags = [
  //     'friends', 'family', 'acquaintances', 'following'
  //   ];
  // };

  // ctrl.getTopArtists = function () {
  //   return ArtistService
  //     .getTopArtists()
  //     .query();
  // };
}

angular
  .module('components.artist')
  .controller('ArtistListController', ArtistListController);