const topBarController = function(artistService, $location) {

    const vm = this
    
    vm.artists = []
    
    vm.searchArtist = function(name) {
        artistService.searchArtist(name)
            .then(result => vm.artists = result)
            .then(result => console.log(result))
    }
}

export default topBarController