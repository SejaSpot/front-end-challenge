const homeController = function(artistService){
    
    var vm = this
    vm.topArtists = []
    vm.topTracks = []
    
    const topArtists = artistService.getTopArtists()
    const topTracks = artistService.getTopTracks()
   
    topArtists.then(result => vm.topArtists = result)
    topTracks.then(result => vm.topTracks = result)
   
}

export default homeController