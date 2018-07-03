function ArtistSearchController(AppService, $resource, $state) {
  const ctrl = this;

  ctrl.searchArtist = function () {
    if (ctrl.search) {
      // Se o input for preenchido,
      // realiza a busca com o valor fornecido
      ctrl.searchResult = AppService
        .searchArtist($resource)
        .get({ 'artist': ctrl.search });
    } else {
      // Se não, impede de realizar a busca
      ctrl.searchResult = null;
    }

    ctrl.submitForm = function () {
      // Ao submeter o formulário,
      // redireciona para a página do artista
      // e limpa o input e o resultado
      $state.go('artist', {
        'name': ctrl.search
      }).then(
        ctrl.search = null,
        ctrl.searchResult = null
      );
    };

    ctrl.clickAnchor = function () {
      // Ao clicar no link,
      // limpa o input e o resultado
      ctrl.search = null;
      ctrl.searchResult = null;
    };
  };
}

angular
  .module('components.artist')
  .controller('ArtistSearchController', ArtistSearchController);