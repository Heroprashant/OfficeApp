/* global angular */
/* global device */
/* global navigator */
/* global Contact */
/* global ContactName */
/* global ContactField */
/* global ContactAddress */
/* global ContactOrganization */
/* global ContactFindOptions */
/* global ContactError */
/* global ContactFieldType */
/* global cordova */
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

      userprofile.getBase64Image = function (imgElem) {
        // imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
        var canvas = document.createElement("canvas");
        canvas.width = imgElem.clientWidth;
        canvas.height = imgElem.clientHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(imgElem, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      };

      userprofile.convertImgToDataURLviaCanvas = function (url, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
          var canvas = document.createElement('CANVAS');
          var ctx = canvas.getContext('2d');
          var dataURL;
          canvas.height = this.height;
          canvas.width = this.width;
          ctx.drawImage(this, 0, 0);
          dataURL = canvas.toDataURL(outputFormat);
          callback(dataURL);
          canvas = null;
        };
        img.src = url;
      };

      //var imgData = JSON.stringify(userprofile.getBase64Image(document.getElementById('profilephoto')));


      //console.log('Photo from profile ' + imgData);



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
            console.log('Running!');
            //console.log(cordova.file);
            //console.log(navigator.contacts);

            //{"fieldType":{"addresses":"addresses","birthday":"birthday","categories":"categories","country":"country","department":"department","displayName":"displayName","emails":"emails","familyName":"familyName","formatted":"formatted","givenName":"givenName","honorificPrefix":"honorificPrefix","honorificSuffix":"honorificSuffix","id":"id","ims":"ims","locality":"locality","middleName":"middleName","name":"name","nickname":"nickname","note":"note","organizations":"organizations","phoneNumbers":"phoneNumbers","photos":"photos","postalCode":"postalCode","region":"region","streetAddress":"streetAddress","title":"title","urls":"urls"}}

            // create contact object
            var contact = navigator.contacts.create();

            //contact.id = '';
            contact.displayName = userprofile.data.firstname + ' ' + userprofile.data.lastname;

            // contact -> name
            var _name = new ContactName();
            _name.givenName = userprofile.data.firstname; // Roepnaam
            _name.familyName = userprofile.data.lastname; // Achternaam
            contact.name = _name;

            contact.nickname = '';

            // contact -> phonenumber(s)
            var _phoneNumbers = [];
            _phoneNumbers[0] = new ContactField(
              'work',
              userprofile.data.phoneNumber,
              false
            );
            _phoneNumbers[1] = new ContactField(
              'mobile',
              userprofile.data.mobileNumber,
              true // preferred number
            );
            contact.phoneNumbers = _phoneNumbers;

            // contact -> email
            var _emails = [];
            _emails[0] = new ContactField(
              'email',
              userprofile.data.email,
              false
            );
            contact.emails = _emails;

            // contact -> address
            var _adresses = [];
            _adresses[0] = new ContactAddress(
              '', // adress.pref
              '', // adress.type
              '', // adress.formatted
              '', // adress.streetAddress
              '', // adress.locality
              '', // adress.region
              '', // adress.postalCode
              ''  // adress.country
            );
            contact.addresses = _adresses;

            // contact -> ims
            var _ims = [];
            _ims[0] = new ContactField(
              'ims',
              '',
              false
            );
            contact.ims = _ims;

            // contact -> organization 
            var organization = [];
            organization[0] = new ContactOrganization(
              '', // adress.pref
              '', // adress.type
              userprofile.data.company, // adress.name
              userprofile.data.department, // adress.department
              userprofile.data.unit + ' - ' + userprofile.data.team // adress.title
            );
            contact.organizations = organization;

            var _birthDay = new Date();
            contact.birthday = _birthDay.getDate();

            contact.note = 'Ciber contact';

            // contact -> photos
            var imgData = '';
            userprofile.convertImgToDataURLviaCanvas(document.getElementById('profilephoto').src, function (base64Img) {
              imgData = base64Img;
              console.log(imgData);
            });
            var _photos = [];
            _photos[0] = new ContactField(
              'url',
              userprofile.data.profilephoto,
              false
            );
            contact.photos = _photos;

            // contact -> categories
            // var _categories = [];
            // _categories[0] = new ContactField(
            //   'ims',
            //   '',
            //   false
            // );
            // contact.categories = _categories;

            // contact -> urls
            // var _urls = [];
            // _urls[0] = new ContactField(
            //   'ims',
            //   '',
            //   false
            // );
            // contact.urls = _urls;

            // save contact object
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
