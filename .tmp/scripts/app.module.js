/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc overview
   * @name app
   * @description
   * <h1>Pocapp</h1>
   * <p>Primairy app.module where we can define all core and features modules that we use in this App</p>
   * @example
   <pre>
   angular
   .module('Pocapp', [
   //Everybody has access to these. Some of these modules like the app.core module have child modules.
   'ionic',
   'Pocapp.core',

   // Feature areas
   'Pocapp.dashboard',
   ]);
   </pre>
   */
  angular
    .module('Pocapp', [
    /**
     * Everybody has access to these. Some of these modules like the app.core module have child modules.
     */
     'ionic',
     'Pocapp.core',

    /**
     * Feature areas
     */
     'Pocapp.appload',
     'Pocapp.dashboard',
     'Pocapp.userprofile',
     'Pocapp.projectdetail',
     'Pocapp.newsdetail'
    ]);
})();
