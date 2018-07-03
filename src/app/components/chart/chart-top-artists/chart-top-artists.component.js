const chartTopArtists = {
  templateUrl: './chart-top-artists.html',
  controller: 'ChartTopArtistsController'
};

angular
  .module('components.chart')
  .component('chartTopArtists', chartTopArtists);
