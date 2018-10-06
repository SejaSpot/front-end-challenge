export default [
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/artist/:name", {
        template: require("@/views/artist/view.pug"),
        controller: "artistController"
      })
      .otherwise({
        template: require("@/views/home/view.pug"),
        controller: "homeController"
      });
  }
];