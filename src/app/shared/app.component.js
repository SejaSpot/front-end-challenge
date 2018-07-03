var app = {
  templateUrl: './app.html'
};

angular
  .module('shared')
  .component('app', app)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        component: 'app'
      })
      .state('artist-info', {
        url: '/artista/:name',
        component: 'artistInfo'
      });
    $urlRouterProvider.otherwise('/');
  });
