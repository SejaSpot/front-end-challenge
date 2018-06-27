const homeController = function(artistService){
    
    var vm = this
    vm.topArtists = []
    
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
    

}

export default homeController