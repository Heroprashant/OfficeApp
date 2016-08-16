/* global angular */
(function() {
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
    //  angular
    //      .module('feature.imagezoomgallery2')
    //      .directive('imageZoomGallery', imageZoomGallery);
    //
    //  //imageZoomGallery.$inject = [ 'IMAGEZOOMGALLERYCONSTANTS2' ];
    //
    //  function imageZoomGallery() {
    //      return {
    //        restrict: 'EA',
    //        template: "<h1>Test Directive 222</h1>",
    //        controller: function(){
    //          console.log( 'Heheheheheh' );
    //        }
    //      }
    //  }

    angular
        .module('Pocapp.newsdetail')
        .controller('NewsdetailCtrl', NewsdetailCtrl);

    // Inject dependencies
    NewsdetailCtrl.$inject = ['dataservice', '$scope', '$stateParams', '$ionicBackdrop',
        '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate', '$ionicPopover'
    ];

    // Start the DashboardCtrl
    function NewsdetailCtrl(dataservice, $scope, $stateParams, $ionicBackdrop, $ionicModal,
        $ionicSlideBoxDelegate, $ionicScrollDelegate, $ionicPopover) {
        var newsdetail = this;

        // Array with images for the slider
        newsdetail.allImages = [{
            src: 'images/slider/slider_one.jpeg'
        }, {
            src: 'images/slider/slider_two.png'
        }, {
            src: 'images/slider/slider_three.jpg'
        }];

        newsdetail.socialshares = [{
          channel: 'Email',
          img: ''
        }, {
          channel: 'Facebook',
          img: ''
        }, {
          channel: 'LinkedIn',
          img: ''
        }];

        // Activate all methods
        activateNewsdetail();

        function activateNewsdetail() {

            //  Popover for the skype contact options which is based on the contact details from user
            $scope.popover = $ionicPopover.fromTemplateUrl('common/features/socialshare/socialshare-popover.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });

            // Show PopOver
            newsdetail.openPopover = function($event) {
                $scope.popover.show($event);
            };

            // Close PopOver
            newsdetail.closePopover = function() {
                $scope.popover.hide();
            };

            //Cleanup the popover when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.popover.remove();
            });

            // Execute action on hide popover
            $scope.$on('popover.hidden', function() {
                // Execute action
            });

            // Execute action on remove popover
            $scope.$on('popover.removed', function() {
                // Execute action
            });

            // Get News by ID from the DB
            dataservice.getByNewsId($stateParams.nId).then(
                function(response) {
                    newsdetail.data = response.data[0];
                    console.log(response);
                },
                function(error) {
                    console.log(error);
                }
            );

            // Refresh the whole page when user scrolls the view to the bottom
            newsdetail.newsDetailRefresh = function() {
                dataservice.getByProjectId($stateParams.nId).then(
                    function(response) {
                        newsdetail.data = response.data[0];
                        console.log(response);
                    },
                    function(error) {
                        console.log(error);
                    }
                ).finally(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                });
            };

            // Open social share options
            newsdetail.socialshare = function($event) {
                newsdetail.openPopover($event);
            };

            return newsdetail;
        }
    }
})();
