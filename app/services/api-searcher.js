angular.module('myApp.apiSearcher', ['ngRoute']).factory("APIService", function($http) {
  const api = {}
  const urlBase = "http://ws.audioscrobbler.com/2.0/?method="
  const apiKey = "0e88f43c5248ff6fd1e662925b8cad52"
  const urlEnd = `&api_key=${apiKey}&format=json`
  const url = `${urlBase}chart.gettopartists${urlEnd}`

  api.getTopArtists = function(){
    const response = $http.get(url)
    return response
  }

  return api
} )