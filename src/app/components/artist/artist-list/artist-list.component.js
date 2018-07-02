var artistList = {
  templateUrl: './artist-list.html',
  controller: 'ArtistListController'
};

angular
  .module('components.artist')
  .component('artistList', artistList);
