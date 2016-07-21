/* global angular*/
(function () {
  'use strict';

  angular
    .module('feature.autoFocus')
    .directive('autoFocus', autoFocus);

  autoFocus.$inject = [ '$timeout' ];

  function autoFocus( $timeout ) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
                _element[0].focus();
            }, 0);
        }
    };
  }
})();
