/* global angular*/
(function () {
  'use strict';

  angular
    .module('feature.imagezoomgallery')
    .directive('imageZoomGallery', imageZoomGallery); 

  imageZoomGallery.$inject = ['$ionicModal', '$ionicScrollDelegate', '$ionicSlideBoxDelegate'];
  
  function imageZoomGallery($ionicModal, $ionicScrollDelegate, $ionicSlideBoxDelegate) {
    return {
      restrict: 'EA',
      template: '',
      templateUrl: 'common/features/imagezoomgallery/imagezoomgallery.html',
      replace: true,
      controllerAs: 'izg',
      scope: {
        galleryId: '=',
        images: '='
      },
      link: function (scope, element, attr) {
        console.log(scope, element, attr);
      },
      controller: function ($scope) {
        
        $scope.imagezoomid = $scope.galleryId;
        $scope.zoomMin = 1;
        $scope.allImages = $scope.images;
        
        $scope.showImages = function (index) {
          $scope.activeSlide = index;
          $scope.showModal('common/features/imagezoomgallery/imagezoomgallery-lightbox.html');
        };

        $scope.showModal = function (templateUrl) {
          $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope
          }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
        };

        $scope.closeModal = function () {
          $scope.modal.hide();
          $scope.modal.remove();
        };

        $scope.updateSlideStatus = function (slide) {
          var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
          if (zoomFactor === $scope.zoomMin) {
            $ionicSlideBoxDelegate.enableSlide(true);
          } else {
            $ionicSlideBoxDelegate.enableSlide(false);
          }
        };
        
      }
    };
  }
})();
