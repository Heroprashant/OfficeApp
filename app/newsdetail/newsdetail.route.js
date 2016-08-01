/* global angular */
(function() {
    'use strict';
    /**
     * @ngdoc object
     * @name projectdetail.route
     * @requires Pocapp
     * @requires core
     * @description
     * <h1>Projectdetail Route</h1>
     * <p>This module configures the route, views, controllers and templates used by this module.</p>
     */
    angular
        .module('Pocapp.newsdetail')
        .config(route);
    route.$inject = ['$stateProvider'];

    function route($stateProvider) {
        $stateProvider
            .state('Pocapp.newsdetail', {
                url: 'newsdetail/:nId',
                views: {
                    appContent: {
                        templateUrl: 'newsdetail/newsdetail.html',
                        controller: 'NewsdetailCtrl',
                        controllerAs: 'newsdetail'
                    }
                }
            });
    }
})();
