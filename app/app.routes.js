const routeApp = function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl : "./components/home/home.html",
        controller: 'homeController',
        controllerAs: 'vm'
    })
    .when("/artist", {
        templateUrl : "./components/artist/artist.html",
        controller: "artistController",
        controllerAs: 'vm'
    })
    .otherwise({
        redirectTo : "/",
    })

}

export default routeApp