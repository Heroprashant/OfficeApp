/* global angular */
(function () {
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

  LayoutCtrl.$inject = ['$ionicViewSwitcher', '$state', '$ionicHistory'];

  function LayoutCtrl($ionicViewSwitcher, $state, $ionicHistory) {
    var layout = this;
    layout.showInformationIcon = true;
    layout.showGoBackButton = true;

    activate();

    function activate() {

      layout.showInformation = function() {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('Pocapp.information');
        setInformationIconOnHeaderBar(false);
        setGoBackButton(false);
      };

      layout.closeInformation = function() {
        $ionicViewSwitcher.nextDirection('forward');
        $ionicHistory.goBack();
        setInformationIconOnHeaderBar(true);
        setGoBackButton(true);
      };

      function setInformationIconOnHeaderBar(show) {
        if(show){
          layout.showInformationIcon = true;
        }
        else {
          layout.showInformationIcon = false;
        }
      }

      function setGoBackButton(show) {
        if(show){
          layout.showGoBackButton = true;
        }
        else {
          layout.showGoBackButton = false;
        }
      }

      return layout;
    }
  }
})();
