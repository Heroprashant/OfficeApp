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
  DashboardCtrl.$inject = ['dataservice', '$scope', '$window', '$ionicLoading', '$ionicPopover', '$timeout', '$interval'];

  // Start the DashboardCtrl
  function DashboardCtrl(dataservice, $scope, $window, $ionicLoading, $ionicPopover, $timeout) {
    var dashboard = this, contactActive = false, interVal = 0, interValReverse = 0;
    dashboard.subject = 'contacts';
    dashboard.opening = false;
    dashboard.closing = false;
    var channel = [];

    // Activate all methods
    activateDashboard();

    function activateDashboard() {

      $scope.popover = $ionicPopover.fromTemplateUrl('dashboard/skype-contact.html', {
        scope: $scope
      }).then(function (popover) {
        $scope.popover = popover;
        console.log($scope.popover);
      });

      dashboard.openPopover = function ($event) {
        $scope.popover.show($event);
      };
      dashboard.closePopover = function () {
        $scope.popover.hide();
      };
      //Cleanup the popover when we're done with it!
      $scope.$on('$destroy', function () {
        $scope.popover.remove();
      });
      // Execute action on hide popover
      $scope.$on('popover.hidden', function () {
        // Execute action
      });
      // Execute action on remove popover
      $scope.$on('popover.removed', function () {
        // Execute action
      });

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

                  if (result.data[count].email && result.data[count].email !== '') {
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
                    'type': 'storeContact',
                    'value': result.data[count].employeeId
                  });

                  dashboard.contacts[count].channels = channel;

                  count++;

                });

                // console.log(dashboard.contacts);
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
        var opening = false;
        dashboard.disabeld = true;
        $timeout(function () {
          dashboard.disabeld = false;
        }, 500)

        // Fucntion to add the transition classes
        function addClasses(id) {
          interVal = 0;
          contactActive = id;
          angular.element(document.querySelector('#contact_togglemenu_' + id)).addClass('toggleMenu');
          angular.element(document.querySelector('#contact_' + id)).addClass('contactQuickMenu');
          angular.element(document.querySelector('#contact-icon-container_' + id)).css({ 'z-index': '9998' });
          $timeout(function () {
            // Open the contactQuickMenu
            angular.element(document.querySelector('#contact_' + id)).addClass('contactQuickMenuActive');
          }, 25);
          angular.forEach(dashboard.contacts[id].channels, function (data, key) {
            interVal += 100;
            $timeout(function () {
              angular.element(document.querySelector('#animation_' + id + '_' + key)).addClass('contact-icon-transition');
            }, interVal);
          });
        }

        function removeClasses(id) {
          contactActive = false;
          interValReverse = 0;
          // Remove the contactQuickMenu transition

          // Loop threw the contacts and see on which #contact_togglemenu id's a class needs to be added or removed
          angular.forEach(dashboard.contacts[id].channels, function (data, channelKey) {
            angular.element(document.querySelector('#contact_' + id)).removeClass('contactQuickMenuActive');
            var test = (dashboard.contacts[id].channels.length - 1) - channelKey;
            interValReverse += 80;
            $timeout(function () {
              angular.element(document.querySelector('#animation_' + id + '_' + test)).removeClass('contact-icon-transition');
            }, interValReverse);
          });

          $timeout(function () {
            angular.element(document.querySelector('#contact_' + id)).removeClass('contactQuickMenu');
            angular.element(document.querySelector('#contact_togglemenu_' + id)).removeClass('toggleMenu');
            angular.element(document.querySelector('#contact-icon-container_' + id)).css({ 'z-index': '-9998' });
          }, interValReverse + 200);
        }

        if (contactActive === false) {
          addClasses(contactIndex);
        } else if (contactActive === contactIndex) {
          removeClasses(contactIndex);
        } else if (contactActive !== contactIndex) {
          removeClasses(contactActive);
          addClasses(contactIndex);
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

      dashboard.sendMail = function (email) {
        $window.open('mailto:' + email + '?subject=subject&body=test', '_self');
      };
      dashboard.callPerson = function (number) {
        $window.open('tel:' + number, '_self');
      };
      dashboard.linkedIn = function (url) {
        $window.open(url, '_blank');
      };
      dashboard.skype = function (type, name, $event) {
        var skypeChannels = JSON.parse(type);
        dashboard.skypeChannels = skypeChannels;
        dashboard.openPopover($event);
      };
      dashboard.storeContact = function (id) {
        alert('Store Contact: ' + id);
      };
      dashboard.openSkype = function(skypeName) {
        if(skypeName.includes('@ciber.com')) {
          //alert('Open Skype: ' + skypeName);
          $window.open('sip:<niek.heezemans@ciber.com>', '_self');
          //$window.open('conf:sip:https://meet.contoso.com/kazuto/7322994', '_self');
        }
        else {
          //alert('Open S4B: ' + skypeName);
          $window.open('skype:echo123?call', '_self');
        }        
      };

      return dashboard;
    }
  }
})();
