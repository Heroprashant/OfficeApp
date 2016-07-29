/* global angular */
(function() {
    'use strict';
    /**
     * @ngdoc object
     * @name core.constants
     * @description
     * <h1>Core Constants</h1>
     * <p>Define the constants to be used in the Core module.</p>
     * @requires Pocapp
     * @requires core
     */
    angular
        .module('Pocapp.core')
        .constant('CORECONSTANTS', {
            DEFAULT_URL: 'appload' // Default url used in the core.route.js for $urlRouterProvider.otherwise
        });
})();
