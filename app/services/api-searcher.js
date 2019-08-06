angular.module('myApp.apiSearcher', ['ngRoute']).factory("APIService", function($http) {
  const api = {
    topArtists: false
  }
  const urlBase = "http://ws.audioscrobbler.com/2.0/?method="
  const apiKey = "0e88f43c5248ff6fd1e662925b8cad52"
  const urlEnd = `&api_key=${apiKey}&format=json`
  const url = `${urlBase}chart.gettopartists${urlEnd}`

  /** 
   * retorna uma imagem buscada no spotify
   * através de um script de busca do bing
   * @param {string} artistName nome do artista
   * @return {string} url da imagem
   */
  getArt = function (artistName) {
    const query = `${artistName} artist spotify.com`
    return `https://tse2.mm.bing.net/th?q=${query}&w=300&h=300&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=on`
  }

  api.getTopArtists = function(){
    const response = $http.get(url).then((response) => {
      const artists = response.data.artists.artist.slice(0,5)
      let artistsWithImages = artists.map(function(artist) {
        artist.image = getArt(artist.name)
        return artist
      })
      api.topArtists = artistsWithImages
    })
    return response
  }

  return api
} )