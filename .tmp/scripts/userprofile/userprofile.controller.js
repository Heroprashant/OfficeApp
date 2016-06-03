/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name userprofile.controller:UserprofileCtrl
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Dashboard Controller</h1>
   * <p>The Dashboard controller </p>
   * <h2>Methods</h2>
   *
   */
  angular
    .module('Pocapp.userprofile')
    .controller('UserprofileCtrl', UserprofileCtrl);

  // Inject dependencies
  UserprofileCtrl.$inject = ['dataservice', '$stateParams'];

  // Start the DashboardCtrl
  function UserprofileCtrl(dataservice, $stateParams) {
    var userprofile = this;

    // Activate all methods
    activateUserprofile();

    function activateUserprofile() {

      dataservice.getByEmployeeId($stateParams.empId).then(
        function(response){
          userprofile.data = response.data[0];
          console.log(response);
        },
        function(error){
          console.log(error);
        }
      )

      return userprofile;
    }
  }
})();
