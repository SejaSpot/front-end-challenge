const artistSearch = {
  templateUrl: './artist-search.html',
  controller: 'ArtistSearchController'
};

angular
  .module('components.artist')
  .component('artistSearch', artistSearch);
