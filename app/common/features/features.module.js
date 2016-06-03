/* global angular*/
(function () {
  'use strict';
  /**
   * @ngdoc overview
   * @name core.services
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Core Services</h1>
   * <p>This module allows to define all the service modules used in the App</p>
   */
  angular
    .module('Pocapp.core.features', [
      /* Angular Modules */

      /* Cross App Modules */
      'feature.imagezoomgallery'

      /* 3rd-party Modules */
    ]);
})(); // End Strict
