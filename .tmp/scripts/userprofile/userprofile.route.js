/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name dashboard.route
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Dashboard Route</h1>
   * <p>This module configures the route, views, controllers and templates used by this module.</p>
   */
  angular
    .module('Pocapp.userprofile')
    .config(route);
  route.$inject = ['$stateProvider'];

  function route($stateProvider) {
    $stateProvider
      .state('Pocapp.userprofile', {
        url: 'userprofile/:empId',
        views: {
          appContent: {
            templateUrl: 'userprofile/userprofile.html',
            controller: 'UserprofileCtrl',
            controllerAs: 'userprofile'
          }
        }
      });
  }
})();
