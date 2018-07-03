const artistTopAlbums = {
  templateUrl: './artist-top-albums.html',
  controller: 'ArtistTopAlbumsController'
};

angular
  .module('components.artist')
  .component('artistTopAlbums', artistTopAlbums);
