const artistController = function(artistService, $routeParams){

    var vm = this 
    vm.artist = []
    vm.topAlbums = []
    vm.similars = []
    vm.topTracks = []
    
    artistService.getArtist($routeParams.name, $routeParams.id)
        .then(result => vm.artist = result)
        .then(result => vm.similars = result.similar.artist)

    artistService.getTopAlbumsFromArtist($routeParams.name)
        .then(result => vm.topAlbums = result)
        .then(result => console.log(result))

    artistService.getTopTracksFromArtist($routeParams.name)
        .then(result => vm.topTracks = result)
        
}

export default artistController

