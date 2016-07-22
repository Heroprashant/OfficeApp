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
/* global File */
/* global FileTransfer */
/* global connection */
(function() {
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
        userprofile.subject = 'personal';
        var imgData = '';

        // Activate all methods
        activateUserprofile();

        function activateUserprofile() {

            // userprofile.createFile = function () {
            //   var type = window.TEMPORARY;
            //   var size = 5 * 1024 * 1024;
            //
            //   window.requestFileSystem(type, size, successCallback, errorCallback);
            //
            //   function successCallback(fs) {
            //     fs.root.getFile(userprofile.data.profilephoto, { create: true, exclusive: true },
            //   function (fileEntry) {
            //       console.log('File creation successfull!');
            //     }, errorCallback);
            //   }
            //
            //   function errorCallback(error) {
            //     console.log('ERROR: ' + error.code);
            //   }
            // };
            // userprofile.createFile();
            var url, callback, outputFormat;
            userprofile.convertImgToDataURLviaCanvas = function(url, callback, outputFormat) {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function() {
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

            $ionicPlatform.ready(function() {
                if ($window.cordova) {
                    userprofile.deviceinfo = device.platform;
                }

                dataservice.getByEmployeeId($stateParams.empId).then(
                    function(response) {
                        userprofile.data = response.data[0];
                        console.log(userprofile.data.profilephoto);

                        userprofile.convertImgToDataURLviaCanvas(userprofile.data.profilephoto, function(base64Img) {

                            imgData = base64Img;
                        });
                    },
                    function(error) {
                        console.log(error);
                    }
                );

                userprofile.storeContact = function() {

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
                            '' // adress.country
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
                        var _photos = [];
                        _photos[0] = new ContactField(
                            'base64',
                            imgData,
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
                            function(success) {
                                console.log('Success: ', success);
                            },
                            function(error) {
                                console.log('Error: ', error);
                            }
                        );

                    } else {
                        console.log('Kan niet omdat je jezelf in de browser bevind!');
                    }
                };

            });

            userprofile.changeSubject = function(subject) {
                userprofile.subject = subject;
            };

            userprofile.sendMail = function(email) {
                $window.open('mailto:' + email + '?subject=subject&body=test', '_self');
            };
            userprofile.callPerson = function(number) {
                $window.open('tel:' + number, '_self');
            };
            userprofile.linkedIn = function(url) {
                $window.open(url, '_blank');
            };
            userprofile.skype = function(type, name, $event) {
            };
            userprofile.storeContact = function(id) {
                window.alert('Store Contact: ' + id);
            };
            userprofile.openSkype = function(skypeName, skypeType) {
                switch (skypeType) {
                    case 'skype4business':
                        $window.open('sip:' + skypeName, '_self');
                        break;
                    case 'skype':
                        $window.open('skype:' + skypeName + '?call&video=true', '_self');
                        break;
                }
            };

            return userprofile;
        }
    }
})();
