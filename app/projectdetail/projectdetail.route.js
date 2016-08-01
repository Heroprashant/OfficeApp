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
        .module('Pocapp.projectdetail')
        .config(route);
    route.$inject = ['$stateProvider'];

    function route($stateProvider) {
        $stateProvider
            .state('Pocapp.projectdetail', {
                url: 'projectdetail/:pId',
                views: {
                    appContent: {
                        templateUrl: 'projectdetail/projectdetail.html',
                        controller: 'ProjectdetailCtrl',
                        controllerAs: 'projectdetail'
                    }
                }
            });
    }
})();
