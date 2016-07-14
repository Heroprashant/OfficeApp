/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name information.route
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Information Route</h1>
   * <p>This module configures the route, views, controllers and templates used by this module.</p>
   */
  angular
    .module('Pocapp.information')
    .config(route);
  route.$inject = ['$stateProvider'];

  function route($stateProvider) {
    $stateProvider
      .state('Pocapp.information', {
        url: '',
        views: {
          appContent: {
            templateUrl: 'information/information.html',
            controller: 'InformationCtrl',
            controllerAs: 'information'
          }
        }
      });
  }
})();
