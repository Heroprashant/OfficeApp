/* global angular */
(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name core
   * @requires Pocapp

   * @description
   * <h1>Core Module</h1>
   * <p>This module allows to include Core Angular Modules that we need for a MVP App.</p>
   * <p>!Important: Configure the DEFAULT_URL in the core.constants.js to set the default App Route.</p>
   * @example
   * <pre>
   (function() {
        'use strict';

        angular
        .module('Pocapp.core', [
          // Angular Modules

          // Core Cross App Modules
          // Example to load modules necessary for the MVP App to work
          'Pocapp.core.layout',
          'Pocapp.core.appload',
          'Pocapp.core.models',
          'Pocapp.core.services',

          //3rd-party Modules

        ]);

      })(); // End Strict
   </pre>
   */

  angular
    .module('Pocapp.core', [
      /* Angular Modules */
      /* Cross App Modules */
      'Pocapp.core.models',
      'Pocapp.core.services',
      'Pocapp.core.layout',
      'Pocapp.core.features',
      /* 3rd-party Modules */
    ]);
})(); // End Strict
