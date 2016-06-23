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
    var channel = [];

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

                  channel = [];

                  if (result.data[count].Email && result.data[count].Email !== '') {
                    channel.push({
                      'type': 'email',
                      'value': result.data[count].email
                    });
                  }
                  if (result.data[count].linkedIn && result.data[count].linkedIn !== '') {
                    channel.push({
                      'type': 'linkedIn',
                      'value': result.data[count].linkedIn
                    });
                  }
                  if (result.data[count].skype && result.data[count].skype !== '') {
                    channel.push({
                      'type': 'skype',
                      'value': result.data[count].skype
                    });
                  }
                  if (result.data[count].mobileNumber && result.data[count].mobileNumber !== '') {
                    channel.push({
                      'type': 'mobileNumber',
                      'value': result.data[count].mobileNumber
                    });
                  }
                  channel.push({
                    'type': 'more',
                    'value': result.data[count].employeeId
                  });

                  dashboard.contacts[count].channels = channel;

                  count++;

                });

                console.log(channel);
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
        // Loop threw dashboard.contacts and remove any animation classes
        angular.forEach(dashboard.contacts, function (data, key) {
          console.log( key );
          var cssClass = angular.element(document.querySelector('#animation_' + key));
          cssClass.removeClass('contact-icon-transition');
        });

        dashboard.contactSelected = contactIndex;
        if (dashboard.contactActivate !== contactIndex) {
          $timeout(function () {
            dashboard.contactActivate = contactIndex;
            var interVal = 0;

            // Loop threw dashboard.channels
            angular.forEach(dashboard.contacts[contactIndex].channels, function (data, key) {
              interVal += 100;
              $timeout(function () {

                //var cssClass = angular.element(document.querySelector('#animation_' + contactIndex + '_' + key));
  	            var cssClass = angular.element(document.querySelector('#animation_' + contactIndex));

                if(!angular.element(document.querySelector('.contact-icons'))) {
                  cssClass.addClass('contact-icons');
                }
                cssClass.addClass('contact-icon-transition');
              }, interVal);
            });
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
