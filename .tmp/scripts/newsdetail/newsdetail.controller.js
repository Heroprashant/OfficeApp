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
        '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate'
    ];

    // Start the DashboardCtrl
    function NewsdetailCtrl(dataservice, $scope, $stateParams, $ionicBackdrop, $ionicModal,
        $ionicSlideBoxDelegate, $ionicScrollDelegate) {
        var newsdetail = this;

        // Array with images for the slider
        newsdetail.allImages = [{
            src: 'images/slider/slider_one.jpeg'
        }, {
            src: 'images/slider/slider_two.png'
        }, {
            src: 'images/slider/slider_three.jpg'
        }];

        // Activate all methods
        activateNewsdetail();

        function activateNewsdetail() {

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

            return newsdetail;
        }
    }
})();
