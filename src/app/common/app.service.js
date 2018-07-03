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
    chartTopArtists: function ($resource) {
      return $resource(url,
        {
          method: 'chart.gettopartists',
          api_key: apiKey,
          format: format,
          limit: 10
        }
      );
    },
    chartTopTracks: function ($resource) {
      return $resource(url,
        {
          method: 'chart.gettoptracks',
          api_key: apiKey,
          format: format,
          limit: 10
        }
      );
    },
    artistInfo: function ($resource) {
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
    artistTopTracks: function ($resource) {
      return $resource(url,
        {
          method: 'artist.gettoptracks',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          autocorrect: 1,
          lang: 'pt',
          limit: 10
        }
      );
    },
    artistTopAlbums: function ($resource) {
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
    artistSimilar: function ($resource) {
      return $resource(url,
        {
          method: 'artist.getsimilar',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          autocorrect: 1,
          limit: 8
        }
      );
    },
  }
}

angular
  .module('common')
  .factory('AppService', AppService);