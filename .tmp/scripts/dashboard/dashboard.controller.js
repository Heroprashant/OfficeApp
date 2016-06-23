/* global angular */
/* global $ */
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
  DashboardCtrl.$inject = ['dataservice', '$ionicLoading', '$timeout'];

  // Start the DashboardCtrl
  function DashboardCtrl(dataservice, $ionicLoading, $timeout) {
    var dashboard = this;
    dashboard.subject = 'contacts';

    // Activate all methods
    activateDashboard();

    function activateDashboard() {

      dashboard.getSearchResult = function () {
        if (dashboard.searchQuery !== '') {
          if (dashboard.subject === 'contacts') {
            $ionicLoading.show({
              template: 'Loading...'
            });
            dataservice.getSearchResult(dashboard.subject, dashboard.searchQuery).then(
              function (result) {
                dashboard.contacts = result.data;
                var count = 0;
                angular.forEach(result.data, function () {

                  var channel = [
                    {
                      'mail': result.data[count].email
                    },
                    {
                      'linkedin': result.data[count].linkedin
                    },
                    {
                      'skype': result.data[count].skype
                    },
                    {
                      'tel': result.data[count].phoneNumber
                    },
                    {
                      'more': result.data[count].employeeId
                    }];

                  dashboard.contacts[count].channels = channel;

                  count++;
                });
              },
              function (error) {
                console.log(error);
              }
            ).finally(
              function () {
                $ionicLoading.hide();
              });
          }
        }
        else {
          dashboard.contacts = null;
        }
      };

      dashboard.changeSubject = function (subject) {
        dashboard.searchQuery = '';
        switch (subject) {
          case 'contacts':

            break;
          case 'projects':
            dashboard.getAllProjects();
            break;
          case 'news':
            dashboard.getAllNews();
            break;
          default:
            break;
        }
        dashboard.subject = subject;
      };

      dashboard.contactMenuToggle = function (contactIndex) {

        dashboard.contactSelected = contactIndex;
        if (dashboard.contactActivate !== contactIndex) {
          $timeout(function () {
            dashboard.contactActivate = contactIndex;

            var interVal = 0;

            // Loop threw dashboard.channels
            angular.forEach(dashboard.contacts[contactIndex].channels, function (data, key) {
              interVal += 2000;
              $timeout(function () {
                angular.element(document.querySelector('#animation_' + contactIndex + '_' + key))
                .addClass('contact-icon-transition contact-icon-' + data);
                console.log(data);
              }, interVal);
            });
            
            //console.log(angular.element(document.querySelector('#animation_' + contactIndex + '_0')));
          }, 25);
        }
        else {
          dashboard.contactActivate = -1;
        }

      };

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
          });
      };

      dashboard.getAllNews = function () {
        $ionicLoading.show({
          template: 'Loading...'
        });
        dataservice.getAllNews().then(
          function (result) {
            dashboard.news = result.data;
          },
          function (error) {
            console.log(error);
          }
        ).finally(
          function () {
            $ionicLoading.hide();
          });
      };

      return dashboard;
    }
  }
})();
