import 'bootstrap-loader'
import './assets/scss/style.scss'

import angular from 'angular'
import ngRoute from 'angular-route'
import routeApp  from './app.routes'

import homeController from './components/home/homeController'
import artistController from './components/artist/artistController'

angular.module('app', [ngRoute])
    .config(routeApp)
    .controller('homeController', homeController)
    .controller('artistController', artistController)
    