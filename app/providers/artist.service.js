const artistService = function($http, config) {
    
    const vm = this
    
    vm.getTopArtists = function() {
        return $http
            .get(`${config.apiUrl}?method=chart.gettopartists&page=1&limit=5&format=json&api_key=${config.apiKey}`)
            .then(result => result.data.artists.artist)
            .then(result => {
                return result.map(result => {
                    return {
                        id: result.mbid,
                        name: result.name,
                        image: result.image[3]['#text'],
                        listeners: result.listeners
                    }
                })
            })
    }

    vm.getTopTracks = function() {
        return $http
            .get(`${config.apiUrl}?method=tag.gettoptracks&page=1&limit=9&tag=disco&format=json&api_key=${config.apiKey}`)
            .then(result => result.data.tracks.track)
            .then(result => {
                return result.map(result => {
                    return {
                        name: result.name,
                        image: result.image[1]['#text'],
                        artist: result.artist.name
                    }
                })
            })
    }
    
    vm.getTopAlbumsFromArtist = function(name) {
        const nameEncoded = encodeURI(name)
        return $http
            .get(`${config.apiUrl}?method=artist.gettopalbums&artist=${nameEncoded}&format=json&limit=5&api_key=${config.apiKey}`)
            .then(result => result.data.topalbums.album)
    }

    vm.getTopTracksFromArtist = function(name) {
        const nameEncoded = encodeURI(name)
        return $http
            .get(`${config.apiUrl}?method=artist.gettoptracks&artist=${nameEncoded}&format=json&limit=10&api_key=${config.apiKey}`)
            .then(result => result.data.toptracks.track)
    }

    vm.getArtist = function(name,id) {
        const nameEncoded = encodeURI(name)
        return $http
            .get(`${config.apiUrl}?method=artist.getinfo&artist=${nameEncoded}&format=json&autocorrect=1&mbid=${id}&api_key=${config.apiKey}`)
            .then(result => result.data.artist)    
    }

    vm.searchArtist = function(artistName) {
        const nameEncoded = encodeURI(artistName)
        return $http
            .get(`${config.apiUrl}?method=artist.search&limit=5&artist=${nameEncoded}&format=json&api_key=${config.apiKey}`)
            .then(result => result.data.results.artistmatches.artist)
            .then(result => {
                return result.map(result => {
                    if(result.mbid != "")
                        return {
                            name: result.name,
                            image: result.image[1]['#text'],
                            mbid : result.mbid
                        }
                })
                //.filter(mbid != "")
            })
    }

    
}

export default artistService



 




   