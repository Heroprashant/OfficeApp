/* global angular */
/* global device */
/* global navigator.contacts */
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
  UserprofileCtrl.$inject = ['$ionicPlatform', '$window', 'dataservice', '$stateParams', '$ionicPopup'];

  // Start the DashboardCtrl
  function UserprofileCtrl($ionicPlatform, $window, dataservice, $stateParams, $ionicPopup) {
    var userprofile = this;
    userprofile.deviceinfo = 'Browser';

    // Activate all methods
    activateUserprofile();

    function activateUserprofile() {

      $ionicPlatform.ready(function () {
        if ($window.cordova) {
          userprofile.deviceinfo = device.platform;
        }

        dataservice.getByEmployeeId($stateParams.empId).then(
          function (response) {
            userprofile.data = response.data[0];
            console.log(response);
          },
          function (error) {
            console.log(error);
          }
        );

        userprofile.storeContact = function () {
          if ($window.cordova) {

            var contact = { 'displayName': 'Murat Aydin' };

            navigator.contacts.create(contact);

            navigator.contacts.save(
              function (success) {
                console.log('Success: ', success);
              },
              function (error) {
                console.log('Success: ', error);
              }
            );

          }
          else {
            alert('Kan niet omdat je jezelf in de browser bevind!');
          }
        };

      });

      return userprofile;
    }
  }
})();
