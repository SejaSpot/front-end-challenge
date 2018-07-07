import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource";
import "bootstrap";
import "@/scss/custom.scss"
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";

import routes from "@/routes";
import headerController from "@/components/header/controller";
import homeController from "@/views/home/controller";
import artistController from "@/views/artist/controller";
import lastfmFactory from "@/shared/lastfmFactory";

angular
  .module("lastfm", [ngRoute, ngResource])
  .config(routes)
  .factory("lastfmFactory", lastfmFactory)
  .controller("headerController", headerController)
  .controller("homeController", homeController)
  .controller("artistController", artistController);
