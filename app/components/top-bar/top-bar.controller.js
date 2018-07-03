const topBarController = function(artistService, $location) {

    const vm = this
    
    vm.artists = []
    
    vm.searchArtist = function(name) {
        artistService.searchArtist(name)
            .then(result => vm.artists = result)
    }

    vm.clearSearch = function() {

        vm.artists = []
    }
}

export default topBarController