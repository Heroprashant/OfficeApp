/* global angular*/
(function() {
    'use strict';
    /**
     * @ngdoc overview
     * @name core.modules
     * @requires Pocapp
     * @requires core
     * @description
     * <h1>Core Services</h1>
     * <p>This module allows to define all the service modules used in the App</p>
     */
    angular
        .module('Pocapp.core.modules', [
            /* Angular Modules */

            /* Cross App Modules */
            'module.contact',
            'module.information'

            /* 3rd-party Modules */
        ]);
})(); // End Strict
