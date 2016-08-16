/* global angular*/
/* global ionic */
(function() {
    'use strict';

    angular
        .module('feature.skype')
        .directive('skype', skype);

    skype.$inject = [];

    function skype() {
        return {
            restrict: 'EA',
            template: '',
            templateUrl: 'common/features/skype/skype-popover.html',
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
