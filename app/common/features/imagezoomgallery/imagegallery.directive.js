/* global angular*/
(function () {
    'use strict';
    /**
     * @ngdoc service
     * @name securestorage.service:securestorage
     * @description
     * @requires https://docs.angularjs.org/api/ng/service/$window
     * @requires https://www.npmjs.com/package/cordova-keychain
     * @requires securestorage.constant:APPSTORAGECONSTANTS
     * <h1>Secure Storage Services</h1>
     * <p>@TODO Describe Services</p>
     */
    angular
        .module('feature.imagezoomgallery')
        .directive('imageZoomGallery', imageZoomGallery);

    // imageZoomGallery.$inject = [];

    function imageZoomGallery() {
        return {
            restrict: 'E', // Elements / Attributes
            scope: { // Your parameters you get from the element or attributes
               
            },
            //replace: true, // Wrap Element in e.g. a span, div, etc for cleaner HTML code
            //templateUrl: 'gallery.html', // the Template you want to use
            template: '<h1>test</h1>',
            link: function (scope, element, attrs) { // Dom manipulation
                console.log(element);
                element.click(function () {
                    alert('Clicked ', element);
                });
            },
            controller: function () { // Run functioanlities
                console.log('test');
            }
        }
    }
});
