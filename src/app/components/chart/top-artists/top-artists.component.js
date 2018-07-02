var topArtists = {
  templateUrl: './top-artists.html',
  controller: 'TopArtistsController'
};

angular
  .module('components.chart')
  .component('topArtists', topArtists);
