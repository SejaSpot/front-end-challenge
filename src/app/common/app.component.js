var app = {};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        component: 'chart'
      })
      .state('artist-info', {
        url: '/artista/:name',
        component: 'artist'
      });
    $urlRouterProvider.otherwise('/');
  });
