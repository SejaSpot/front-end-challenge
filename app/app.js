import angular from 'angular'
import ngRoute from 'angular-route'
import routeApp  from './app.routes'

import homeController from './components/home/homeController'
import artistController from './components/artist/artistController'


const app = angular.module('app', [ngRoute])
    .config(routeApp)
    .controller('homeController', homeController)
    .controller('artistController', artistController)
    