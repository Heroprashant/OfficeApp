/* global angular */
(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name projectdetail.controller:ProjectdetailCtrl
   * @requires Pocapp
   * @requires core
   * @description
   * <h1>Projectdetail Controller</h1>
   * <p>The Projectdetail controller </p>
   * <h2>Methods</h2>
   *
   */
  angular
    .module('Pocapp.projectdetail')
    .controller('ProjectdetailCtrl', ProjectdetailCtrl);

  // Inject dependencies
  ProjectdetailCtrl.$inject = ['dataservice', '$scope', '$stateParams', '$ionicBackdrop', '$ionicModal',
  '$ionicSlideBoxDelegate', '$ionicScrollDelegate'];

  // Start the DashboardCtrl
  function ProjectdetailCtrl(dataservice, $scope, $stateParams, $ionicBackdrop, $ionicModal,
    $ionicSlideBoxDelegate, $ionicScrollDelegate) {
    var projectdetail = this;
    projectdetail.subject = 'project';

    projectdetail.allImages = [{
      src: 'images/slider/slider_one.jpeg'
    }, {
        src: 'images/slider/slider_two.png'
      }, {
        src: 'images/slider/slider_three.jpg'
      }];

    projectdetail.zoomMin = 1;

    // Activate all methods
    activateProjectdetail();

    function activateProjectdetail() {

      dataservice.getByProjectId($stateParams.pId).then(
        function (response) {
          projectdetail.data = response.data[0];
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );

      projectdetail.changeSubject = function (subject) {
        switch (subject) {
          case 'project':
            break;
          case 'team':
            break;
          case 'links':
            break;
          default:
            break;
        }
        projectdetail.subject = subject;
      };

      projectdetail.showImages = function (index) {
        projectdetail.activeSlide = index;
        projectdetail.showModal('template/template-gallery-zoomview.html');
      };

      projectdetail.showModal = function (templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
          scope: $scope
        }).then(function (modal) {
          projectdetail.modal = modal;
          projectdetail.modal.show();
        });
      };

      projectdetail.closeModal = function () {
        projectdetail.modal.hide();
        projectdetail.modal.remove();
      };

      projectdetail.updateSlideStatus = function (slide) {
        var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
        if (zoomFactor === projectdetail.zoomMin) {
          $ionicSlideBoxDelegate.enableSlide(true);
        } else {
          $ionicSlideBoxDelegate.enableSlide(false);
        }
      };

      projectdetail.projectDetailRefresh = function () {
        dataservice.getByProjectId($stateParams.pId).then(
          function (response) {
            projectdetail.data = response.data[0];
            console.log(response);
          },
          function (error) {
            console.log(error);
          }
        ).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      return projectdetail;
    }
  }
})();
