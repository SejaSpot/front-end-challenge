var app = {
  templateUrl: './app.html',
  controller: 'AppController'
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
        url: '/artista',
        component: 'artistInfo'
      });
    $urlRouterProvider.otherwise('/');
  });
