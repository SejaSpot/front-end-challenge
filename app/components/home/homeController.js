const homeController = (artistService) => {
    
    var vm = this

    const topArtists = artistService.getTopArtists()
    topArtists.then(result => {
        console.log(result)
    })
}

export default homeController