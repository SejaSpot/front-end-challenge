const routeApp = function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl : "./components/home/home.html",
        controller: 'homeController',
    })
    .when("/artist", {
        templateUrl : "./components/artist/artist.html",
        controller: "artistController"
    })
    .otherwise({
        redirectTo : "/"
    })

}

export default routeApp