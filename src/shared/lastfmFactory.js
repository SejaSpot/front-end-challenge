const url = 'https://ws.audioscrobbler.com/2.0/';
const apiKey = '1dbc4804cea1ed705b9c86c55f63cd86';
const format = 'json';

export default function () {
  return {
    chartTopArtists($resource) {
      return $resource(url,
        {
          method: 'chart.gettopartists',
          api_key: apiKey,
          format: format,
          limit: 5
        }
      )
    },
    chartTopTracks($resource) {
      return $resource(url,
        {
          method: 'chart.gettoptracks',
          api_key: apiKey,
          format: format,
          limit: 9
        }
      )
    },
    artistInfo($resource) {
      return $resource(url,
        {
          method: 'artist.getinfo',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          autocorrect: 1,
        }
      )
    },
    artistTopTracks($resource) {
      return $resource(url,
        {
          method: 'artist.gettoptracks',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          limit: 10
        }
      )
    },
    artistTopAlbums($resource) {
      return $resource(url,
        {
          method: 'artist.gettopalbums',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          limit: 5
        }
      )
    },
    artistSimilar($resource) {
      return $resource(url,
        {
          method: 'artist.getsimilar',
          api_key: apiKey,
          format: format,
          artist: '@artist',
          limit: 8
        }
      )
    }
  };
}