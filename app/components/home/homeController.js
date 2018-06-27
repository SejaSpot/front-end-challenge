const homeController = function(artistService){
    
    var vm = this
    vm.topArtists = []
    vm.topTracks = []

    const topArtists = artistService.getTopArtists()
    topArtists.then(result => {

        vm.topArtists = result.data.artists.artist
            .map(result => {
                return {
                    name: result.name,
                    image: result.image[3]['#text'],
                    listeners: result.listeners
                }
            })
    })

    const topTracks = artistService.getTopTracks()
    topTracks.then(result=> {
        
        vm.topTracks = result.data.tracks.track
            .map(result => {
                return {
                    name : result.name,
                    url : result.url,
                    artist : result.artist.name,
                    image : result.image[1]['#text']
                }
            })

        console.log(vm.topTracks)

    })

}

export default homeController