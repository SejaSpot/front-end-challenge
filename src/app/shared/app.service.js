function AppService($resource) {
  const url = 'http://ws.audioscrobbler.com/2.0/';
  const apiKey = '6f10969cae542adb145d7c3641d189e1';
  const format = 'json';

  return {
    getTopArtists: function ($resource) {
      return $resource(url,
        {
          method: 'chart.gettopartists',
          api_key: apiKey,
          format: format,
          limit: 10
        },
        {
          query: {
            method: 'GET',
            isArray: false
          }
        });
    },
    getTopTracks: function ($resource) {
      return $resource(url,
        {
          method: 'chart.gettoptracks',
          api_key: apiKey,
          format: format,
          limit: 10
        },
        {
          query: {
            method: 'GET',
            isArray: false
          }
        });
    },
    searchArtist: function ($resource) {
      return $resource(url,
        {
          method: 'artist.search',
          api_key: apiKey,
          format: format,
          limit: 4,
          artist: '@artist'
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
  .module('shared')
  .factory('AppService', AppService);