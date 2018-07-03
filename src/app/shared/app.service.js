function AppService($resource) {
  const url = 'http://ws.audioscrobbler.com/2.0/';
  const apiKey = '6f10969cae542adb145d7c3641d189e1';
  const format = 'json';

  return {
    searchArtist: function ($resource) {
      return $resource(url,
        {
          method: 'artist.search',
          api_key: apiKey,
          format: format,
          limit: 4,
          artist: '@artist'
        }
      );
    },
    getTopArtists: function ($resource) {
      return $resource(url,
        {
          method: 'chart.gettopartists',
          api_key: apiKey,
          format: format,
          limit: 10
        }
      );
    },
    getTopTracks: function ($resource) {
      return $resource(url,
        {
          method: 'chart.gettoptracks',
          api_key: apiKey,
          format: format,
          limit: 10
        }
      );
    },
    getArtistInfo: function ($resource) {
      return $resource(url,
        {
          method: 'artist.getinfo',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          autocorrect: 1,
          lang: 'pt'
        }
      );
    },
    getTopAlbums: function ($resource) {
      return $resource(url,
        {
          method: 'artist.gettopalbums',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          autocorrect: 1,
          lang: 'pt',
          limit: 5
        }
      );
    },
  }
}

angular
  .module('shared')
  .factory('AppService', AppService);