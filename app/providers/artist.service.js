const artistService = function($http, config) {
    
    const vm = this
    
    vm.getTopArtists = function() {
        return $http
            .get(config.apiUrl+"?method=chart.gettopartists&page=1&limit=5&format=json&api_key="+config.apiKey)
    }

    
}

export default artistService



 




   