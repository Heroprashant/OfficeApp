/* global angular */
(function() {
    'use strict';
    /**
    * @ngdoc controller
    * @name core.layout.controller
    * @requires Pocapp
    * @requires core
    * @requires core.layout
    * @description
    * <h1>Core Layout Controller</h1>
    * <p>The Core Layout Controller allows you to control the functionalities for the page
    where the Parent Nav view exists.</p>
    * <p>Comes in handy when f.e. you would like to, for example, include a sidemenu</p>
    */
    angular
        .module('Pocapp.core.layout')
        .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['$scope', '$ionicViewSwitcher', '$state', '$ionicHistory', '$ionicModal'];

    function LayoutCtrl($scope, $ionicViewSwitcher, $state, $ionicHistory, $ionicModal) {
        var layout = this;
        layout.showInformationIcon = true;
        layout.showGoBackButton = true;

        activate();

        function activate() {

            layout.showInformation = function() {
                // $ionicViewSwitcher.nextDirection('back');
                // $state.go('Pocapp.information');
                // setInformationIconOnHeaderBar(false);
                // setGoBackButton(false);
            };

            // layout.closeInformation = function() {
            //   $ionicViewSwitcher.nextDirection('forward');
            //   $ionicHistory.goBack();
            //   setInformationIconOnHeaderBar(true);
            //   setGoBackButton(true);
            // };

            function setInformationIconOnHeaderBar(show) {
                if (show) {
                    layout.showInformationIcon = true;
                } else {
                    layout.showInformationIcon = false;
                }
            }

            function setGoBackButton(show) {
                if (show) {
                    layout.showGoBackButton = true;
                } else {
                    layout.showGoBackButton = false;
                }
            }

            $ionicModal.fromTemplateUrl('my-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            layout.openModal = function() {
                $scope.modal.show();
            };
            layout.closeModal = function() {
                $scope.modal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

            return layout;
        }
    }
})();
