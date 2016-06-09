/* global angular */
/* global device */
/* global navigator */
/* global ContactName */
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
            console.log( 'Running!' );
            console.log( navigator.contacts );


            //{"fieldType":{"addresses":"addresses","birthday":"birthday","categories":"categories","country":"country","department":"department","displayName":"displayName","emails":"emails","familyName":"familyName","formatted":"formatted","givenName":"givenName","honorificPrefix":"honorificPrefix","honorificSuffix":"honorificSuffix","id":"id","ims":"ims","locality":"locality","middleName":"middleName","name":"name","nickname":"nickname","note":"note","organizations":"organizations","phoneNumbers":"phoneNumbers","photos":"photos","postalCode":"postalCode","region":"region","streetAddress":"streetAddress","title":"title","urls":"urls"}}

            var contact = navigator.contacts.create();
            contact.displayName = 'Plumber2';
            contact.nickname = 'Plumber2';

            // populate some fields
            var name = new ContactName();
            name.givenName = 'John 2'; // Roepnaam
            name.familyName = 'Doe'; // Achternaam
            name.middleName = 'Van'; // Tussenvoegsel
            contact.name = name;

            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '768-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '999-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);

            contact.phoneNumbers = phoneNumbers;

            console.log( 'Created' );
            contact.save(
              function (success) {
                console.log('Success: ', success);
              },
              function (error) {
                console.log('Error: ', error);
              }
            );

          }
          else {
            console.log('Kan niet omdat je jezelf in de browser bevind!');
          }
        };

      });

      return userprofile;
    }
  }
})();
