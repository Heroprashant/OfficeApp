/* global angular */
(function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name appload.controller:ApploadCtrl
     * @requires http://ionicframework.com/docs/api/utility/ionic.Platform/
     * @requires https://docs.angularjs.org/api/ng/service/$window
     * @requires https://github.com/angular-ui/ui-router/wiki/Quick-Reference#state-1
     * @requires appload.constant:APPLOADCONSTANTS
     * @description
     * <h1>Core Appload Controller</h1>
     * <p>The Core Appload Controller allows you to control the functionalities on App Startup before going to the Dashboard or Homepage.</p>
     * <p>Comes in handy when f.e. you would like to, for example, verify a networkconnection or verify a session.</p>
     */
    angular
        .module('Pocapp.appload')
        .controller('ApploadCtrl', ApploadCtrl);

    // Inject dependencies
    ApploadCtrl.$inject = ['$ionicPlatform', '$window', '$state', 'APPLOADCONSTANTS'];

    // Start the DashboardCtrl
    function ApploadCtrl($ionicPlatform, $window, $state, APPLOADCONSTANTS) {
        var appload = this;

        // Activate the Controller
        activateCtrl();

        // This function is called on start
        function activateCtrl() {

            // Wait until IonicPlatform is ready
            $ionicPlatform.ready(function() {
                /**
                 * Check if this is a device or browser
                 */
                 var shrinkAndGrow = function () {
                   if (stopprocess) {
                       execute();
                       return;
                   }
                   angular.element(document.querySelector('#testimage')).addClass('shrink');
                   console.log('shrink')
                   setTimeout(shrinkAndGrow, 1000);
                 }
                 setTimeout(shrinkAndGrow, 1000);

                 function execute() {
                   console.log('complete')
                   setTimeout(function () {
                     if ($window.cordova) {
                         console.log('cordova check => device');
                         $state.go('Pocapp.dashboard');
                     } else {
                         console.log('cordova check => browser');
                         $state.go('Pocapp.dashboard');
                     }
                   }, 500);
                 }

                 var stopprocess = false;
                 setTimeout(function () {
                   angular.element(document.querySelector('#testimage')).removeClass('displayed-shrink');
                   angular.element(document.querySelector('#testimage')).removeClass('shrink');
                   angular.element(document.querySelector('#testimage')).addClass('displayed-grow');
                   angular.element(document.querySelector('#testimage')).addClass('grow');
                   console.log('grow');
                   stopprocess = true;
                 }, 1950);


                return appload;
            });
        }
    }
})();
