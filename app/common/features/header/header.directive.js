/* global angular*/
/* global ionic */
(function() {
    'use strict';

    angular
        .module('feature.header')
        .directive('header', header);

    header.$inject = ['$state', '$ionicHistory'];

    function header($state, $ionicHistory) {
        return {
            restrict: 'EA',
            template: '',
            templateUrl: 'common/features/header/header.html',
            replace: true,
            controllerAs: 'hd',
            scope: {
                bgColor: '=',
                showBackButton: '='
            },
            link: function(scope, element, attr) {
                //console.log(scope, element, attr);

                scope.backgroundColor = attr.bgcolor;
                scope.hideGoBackButton = attr.showbackbutton;
            },
            controller: function($scope) {

                $scope.headerStyle = '';
                var currentState = $state.current.url;
                console.log('header ' + currentState);

                switch (currentState) {
                    case 'dashboard':
                        $scope.headerStyle = {
                            'background-color': 'transparent'
                        };
                        break;
                    case 'projectdetail/':
                        $scope.headerStyle = {
                            'background-color': 'blue'
                        };
                        break;
                }

                $scope.myGoBack = function() {
                    $ionicHistory.goBack();
                };

                function test() {
                  console.log('hij doet t biatchess!!!!');
                }
            }
        };
    }
})();
