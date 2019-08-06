angular.module('myApp.apiSearcher', ['ngRoute']).factory("APIService", function($http) {
  const api = {
    topArtists: false,
    topTracks: false
  }
  const urlBase = "http://ws.audioscrobbler.com/2.0/?method="
  const apiKey = "0e88f43c5248ff6fd1e662925b8cad52"
  const urlEnd = `&api_key=${apiKey}&format=json`
  const urls = {
    topArtists: `${urlBase}chart.gettopartists${urlEnd}`,
    topTracks: `${urlBase}chart.gettoptracks${urlEnd}` 
  }

  /** 
   * retorna uma imagem buscada no spotify
   * através de um script de busca do bing
   * @param {string} artistName nome do artista/álbum
   * @param {string} 'artist' ou 'album'
   * @return {string} url da imagem
   */
  getArt = function (name, type="artist") {
    const query = `${name} ${type} spotify.com`
    return `https://tse2.mm.bing.net/th?q=${query}&w=300&h=300&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=on`
  }

  api.getTopArtists = function(){
    const response = $http.get(urls['topArtists']).then((response) => {
      const artists = response.data.artists.artist.slice(0,5)
      let artistsWithImages = artists.map(function(artist) {
        artist.image = getArt(artist.name)
        return artist
      })
      api.topArtists = artistsWithImages
    })
    return response
  }

  api.getTopTracks = function(){
    const response = $http.get(urls['topTracks']).then((response) => {
      const nineTracks = response.data.tracks.track.slice(0,9)
      let tracksWithImages = nineTracks.map(function(item) {
        item.image = getArt(item.artist.name)
        return item
      })
      api.topTracks = tracksWithImages
    })
    return response
  }

  return api
} )