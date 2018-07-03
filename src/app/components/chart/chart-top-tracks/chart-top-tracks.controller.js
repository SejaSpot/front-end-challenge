function ChartTopTracksController(AppService, $resource) {
  const ctrl = this;

  ctrl.chartTopTracks = AppService
    .chartTopTracks($resource)
    .get();

  ctrl.breakpoints = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];
}

angular
  .module('components.chart')
  .controller('ChartTopTracksController', ChartTopTracksController);