(function () {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('HomeController', ['$scope', function ($scope) {
            
            function initialize() {
                $scope.bandName = "The Monkees";
                $scope.pageTitle = "Home";
            }

            initialize();
        }]);

}());