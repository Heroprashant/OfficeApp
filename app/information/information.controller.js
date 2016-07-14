/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name information.controller:InformationCtrl
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Information Controller</h1>
   * <p>The Information controller </p>
   * <h2>Methods</h2>
   *
   */
  angular
    .module('Pocapp.information')
    .controller('InformationCtrl', InformationCtrl);

  // Inject dependencies
  InformationCtrl.$inject = [];

  // Start the InformationCtrl
  function InformationCtrl() {
    var information = this;

    // Activate all methods
    activateInformation();

    function activateInformation() {

      return information;
    }
  }
})();
