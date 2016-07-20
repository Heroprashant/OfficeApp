/* global angular*/
(function() {
    'use strict';

    angular
        .module('feature.fakestatusbar')
        .directive('fakeStatusBar', fakeStatusBar);

    fakeStatusBar.$inject = [];

    function fakeStatusBar() {
        return {
            restrict: 'E',
            replace: true,
            template: '../fakestatusbar/fakestatusbar.html'
        };
    }
})();
