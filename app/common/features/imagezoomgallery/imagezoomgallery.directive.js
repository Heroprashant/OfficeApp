/* global angular*/
(function () {
    'use strict';

    angular
        .module('feature.imagezoomgallery')
        .directive('imageZoomGallery', imageZoomGallery);

    imageZoomGallery.$inject = [ ];

    function imageZoomGallery(  ) {
        return {
          restrict: 'EA',
          template: '<h1>Test Directive</h1>',
          scope:{
            images: '='
          },
          link: function( scope, element, attr){
            console.log( scope, element, attr );
          },
          controller: function( $scope ){
            console.log( 'Heheheheheh' );
          }
        };
    }
})();
