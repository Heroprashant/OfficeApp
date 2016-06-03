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
    .module('Pocapp.newsdetail')
    .controller('NewsdetailCtrl', NewsdetailCtrl);

  // Inject dependencies
  NewsdetailCtrl.$inject = ['dataservice', '$scope', '$stateParams', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate'];

  // Start the DashboardCtrl
  function NewsdetailCtrl(dataservice, $scope, $stateParams, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
    var newsdetail = this;

    newsdetail.allImages = [{
      src: 'images/slider/slider_one.jpeg'
    }, {
        src: 'images/slider/slider_two.png'
      }, {
        src: 'images/slider/slider_three.jpg'
      }];

    newsdetail.zoomMin = 1;

    // Activate all methods
    activateNewsdetail();

    function activateNewsdetail() {

      dataservice.getByNewsId($stateParams.nId).then(
        function (response) {
          newsdetail.data = response.data[0];
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      )

      newsdetail.showImages = function (index) {
        newsdetail.activeSlide = index;
        newsdetail.showModal('template/template-gallery-zoomview.html');
      };

      newsdetail.showModal = function (templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
          scope: $scope
        }).then(function (modal) {
          newsdetail.modal = modal;
          newsdetail.modal.show();
        });
      }

      newsdetail.closeModal = function () {
        newsdetail.modal.hide();
        newsdetail.modal.remove();
      };

      newsdetail.updateSlideStatus = function (slide) {
        var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
        if (zoomFactor == newsdetail.zoomMin) {
          $ionicSlideBoxDelegate.enableSlide(true);
        } else {
          $ionicSlideBoxDelegate.enableSlide(false);
        }
      };

      return newsdetail;
    }
  }
})();
