const topTracksDirective = function(artistService) {

    return {
        template: './top-tracks.directive.html',
        link : function (scope, element, attrs) {
            
            console.log()
        }
    }

}

export default topTracksDirective


/*

topTracks.then(result=> {
        
        vm.topTracks = result.data.tracks.track
            .map((result) => {
                return {
                    name : result.name,
                    url : result.url,
                    artist : result.artist.name,
                    image : result.image[1]['#text']
                }
            }).filter((element, i) => i>=0 && i<3)

        console.log(vm.topTracks)
    })

*/