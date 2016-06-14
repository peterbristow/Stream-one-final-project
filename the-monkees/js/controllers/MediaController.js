(function () {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('MediaController', ['$scope', 'MediaService', 'Lightbox', function ($scope, MediaService, Lightbox) {

            function loadImages() {
                MediaService.getData().then(function (data) {
                    $scope.images = data.images;
                });
            }

            function initialize() {
                $scope.pageTitle = "Media - Music";
                $scope.pageTitle2 = "Media - Videos";
                $scope.pageTitle3 = "Media - Photos";
                $scope.images = [];

                loadImages();
            }

            // baguetteBox.run('.the-monkees-gallery>.gallery');
            $scope.openLightboxModal = function(index) {
                Lightbox.openModal($scope.images, index);
            };

            initialize();

        }]);
}());