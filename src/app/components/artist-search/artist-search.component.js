var artistSearch = {
  templateUrl: './artist-search.html',
  controller: 'ArtistSearchController'
};

angular
  .module('components.artistSearch')
  .component('artistSearch', artistSearch);
