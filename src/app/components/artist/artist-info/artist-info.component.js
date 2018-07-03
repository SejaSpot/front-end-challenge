const artistInfo = {
  templateUrl: './artist-info.html',
  controller: 'ArtistInfoController'
};

angular
  .module('components.artist')
  .component('artistInfo', artistInfo);
