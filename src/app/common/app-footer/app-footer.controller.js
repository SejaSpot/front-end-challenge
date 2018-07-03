function AppFooterController() {
  const ctrl = this;

  ctrl.currentYear = new Date().getFullYear();
}

angular
  .module('common')
  .controller('AppFooterController', AppFooterController);