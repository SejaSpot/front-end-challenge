const artistTopTracks = {
  templateUrl: './artist-top-tracks.html',
  controller: 'ArtistTopTracksController'
};

angular
  .module('components.artist')
  .component('artistTopTracks', artistTopTracks);
