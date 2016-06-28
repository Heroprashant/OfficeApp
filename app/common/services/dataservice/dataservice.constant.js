/* global angular*/
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name dataservice.constant:APPSTORAGECONSTANTS
   * @description
   * <h1>Data Service</h1>
   */
  angular
    .module('service.dataservice')
    .constant('DATASERVICECONSTANTS', {
      BASE_URL: 'http://10.31.16.185:3000'
    });
})();
