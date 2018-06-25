const homeController = function(artistService){
    
    var vm = this
    vm.objects = []

    const topArtists = artistService.getTopArtists()
    topArtists.then(result => {
        console.log(result)
        vm.objects = result.data.artists.artist
    })

}

export default homeController