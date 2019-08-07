'use strict';

describe('myApp.artist module', function() {

  beforeEach(module('myApp.artist'));

  describe('artist controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var ArtistCtrl = $controller('ArtistCtrl');
      expect(ArtistCtrl).toBeDefined();
    }));

  });
});