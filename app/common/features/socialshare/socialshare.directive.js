/* global angular*/
/* global ionic */
(function() {
    'use strict';

    angular
        .module('feature.socialshare')
        .directive('socialshare', socialshare);

    socialshare.$inject = [];

    function socialshare() {
        return {
            restrict: 'EA',
            template: '',
            templateUrl: 'common/features/socialshare/socialshare-popover.html',
            replace: true,
            controllerAs: 's',
            scope: {
                galleryId: '=',
                images: '='
            },
            link: function(scope, element, attr) {
                //console.log(scope, element, attr);
            },
            controller: function($scope) {



            }
        };
    }
})();
