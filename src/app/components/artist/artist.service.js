function ArtistService($resource) {
  const apiKey = '6f10969cae542adb145d7c3641d189e1';

  return {
    getTopArtists: function ($resource) {
      return $resource('http://ws.audioscrobbler.com/2.0/',
        {
          method: 'chart.gettopartists',
          api_key: apiKey,
          format: 'json',
          page: 1,
          limit: 5
        },
        {
          query: {
            method: 'GET',
            isArray: false
          }
        });
    },
  }
}

angular
  .module('components.artist')
  .factory('ArtistService', ArtistService);