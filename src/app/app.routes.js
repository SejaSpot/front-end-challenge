const routeApp = ($routeProvider) => {

    $routeProvider
    .when("/", {
        templateUrl : "./app/components/home/home.html",
        controller: "homeController"
    })
    .when("/artist", {
        templateUrl : "./app/components/artist/artist.html",
        controller: "artistController"
    })
    .otherwise({
        templateUrl : "./app/components/home/home.html"
    })

}

export default routeApp