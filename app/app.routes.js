const routeApp = function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl : "./components/home/home.html",
        controller: 'homeController',
        controllerAs: 'vm'
    })
    .when("/artist/:id/:name", {
        templateUrl : "./components/artist/artist.html",
        controller: "artistController",
        controllerAs: 'vm'
    })
    .otherwise({
        redirectTo : "/",
    })

}

export default routeApp