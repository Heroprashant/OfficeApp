/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name dashboard.controller:DashboardCtrl
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Dashboard Controller</h1>
   * <p>The Dashboard controller </p>
   * <h2>Methods</h2>
   *
   */
  angular
    .module('Pocapp.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  // Inject dependencies
  DashboardCtrl.$inject = ['dataservice', '$ionicLoading'];

  // Start the DashboardCtrl
  function DashboardCtrl(dataservice, $ionicLoading) {
    var dashboard = this;
    dashboard.subject = 'contacts';

    // Activate all methods
    activateDashboard();

    function activateDashboard() {

      // dataservice.getAllContacts().then(
      //   function(result){
      //     dashboard.contacts = result.data;
      //   },
      //   function(error){
      //     console.log(error);
      //   }
      // )

      dashboard.getSearchResult = function () {
        if (dashboard.searchQuery != '') {
          if (dashboard.subject == 'contacts') {
            $ionicLoading.show({
              template: 'Loading...'
            });
            dataservice.getSearchResult(dashboard.subject, dashboard.searchQuery).then(
              function (result) {
                dashboard.contacts = result.data;
              },
              function (error) {
                console.log(error);
              }
            ).finally(
              function () {
                $ionicLoading.hide();
              })
          }
        }
        else{
          dashboard.contacts = null;
        }
      }

      dashboard.changeSubject = function (subject) {
        switch (subject) {
          case 'contacts':

            break;
          case 'projects':
            dashboard.getAllProjects();
            break;
          case 'news':

            break;
          default:
            break;
        }
        dashboard.subject = subject;
        dashboard.searchQuery = null;
      }

      dashboard.getAllProjects = function () {
        $ionicLoading.show({
          template: 'Loading...'
        });
        dataservice.getAllProjects().then(
          function (result) {
            dashboard.projects = result.data;
          },
          function (error) {
            console.log(error);
          }
        ).finally(
          function () {
            $ionicLoading.hide();
          })
      }

      return dashboard;
    }
  }
})();
