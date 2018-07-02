import angular from 'angular'
import ngRoute from 'angular-route'
import routeApp  from './app.routes'
import config from './config/config'

import artistService from './providers/artist.service'

import homeController from './components/home/homeController'
import artistController from './components/artist/artistController'
import topBarController from './components/top-bar/top-bar.controller';

import unsafe from '../app/utils/unsafe.filter'
import escap from '../app/utils/escape.filter'



const app = angular.module('app', [ngRoute])
    .config(routeApp)
    .constant('config', config)
    .controller('homeController', homeController)
    .controller('artistController', artistController)
    .controller('topBarController', topBarController)
    .service('artistService', artistService)
    .filter('unsafe', unsafe)
    .filter('escape', escap)
    .component('topBar', {
        templateUrl: './components/top-bar/top-bar.component.html',
        controller: 'topBarController as vm'
    })

    
export default app