/* global angular*/
/* global ionic */
(function() {
    'use strict';

    angular
        .module('feature.shrinkingheader')
        .directive('shrinkingHeader', shrinkingHeader);

    shrinkingHeader.$inject = [];

    function shrinkingHeader() {
        var fadeAmt;

        var shrink = function(header, content, amt, max) {
            amt = Math.min(44, amt);
            fadeAmt = 1 - amt / 44;

            ionic.requestAnimationFrame(function() {
                header[0].style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
                for (var i = 0, j = header[0].children.length; i < j; i++) {
                    header[0].children[i].style.opacity = fadeAmt;
                }
            });
        };

        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {
                var starty = $scope.$eval($attr.headerShrink) || 0;
                var shrinkAmt;

                // var header = $document[0].body.querySelector('.bar-header');

                var header = angular.element(document.querySelector('.bar-header'));

                var headerHeight = header[0].offsetHeight;

                $element.bind('scroll', function(e) {
                    var scrollTop = null;
                    if (e.detail) {
                        scrollTop = e.detail.scrollTop;
                    } else if (e.target) {
                        scrollTop = e.target.scrollTop;
                    }
                    if (scrollTop > starty) {
                        // Start shrinking
                        shrinkAmt = headerHeight - Math.max(0, (starty + headerHeight) - scrollTop);
                        shrink(header, $element[0], shrinkAmt, headerHeight);
                    } else {
                        shrink(header, $element[0], 0, headerHeight);
                    }
                });
            }
        };
    }
})();
