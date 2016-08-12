/* global angular*/
/* global ionic */
(function() {
    'use strict';

    angular
        .module('module.contact')
        .directive('contactmodule', contactmodule);

    contactmodule.$inject = ['$ionicModal'];

    function contactmodule($ionicModal) {
        return {
            restrict: 'AEC',
            template: '',
            templateUrl: 'common/modules/contact/contact.html',
            replace: false,
            controllerAs: 'contact',
            scope: {
                dashboard: '@'
            },
            link: function(scope, element, attr) {
                console.log(scope, element, attr);

                attr.$observe('dashboard', function() {
                  console.log('changed is true');
                });

            },
            controller: function($scope) {
                console.log($scope.dashboard);
                //var test = $scope.dashboardObject;
                //console.log($scope);
            }
        };
    }
})();
