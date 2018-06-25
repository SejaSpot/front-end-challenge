import angular from 'angular'
import ngRoute from 'angular-route'
import routeApp  from './app.routes'
import config from './config/config'

import artistService from './providers/artist.service'

import homeController from './components/home/homeController'
import artistController from './components/artist/artistController'

const app = angular.module('app', [ngRoute])
    .config(routeApp)
    .controller('homeController', homeController)
    .controller('artistController', artistController)
    .constant('config', config)
    .service('artistService', artistService)
    
export default app