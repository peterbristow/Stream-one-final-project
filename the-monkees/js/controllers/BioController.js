(function() {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('BioController', ['$scope', function ($scope) {
            function initialize() {
                $scope.pageTitle = "Band Bio";
            }
            
            initialize();
        }]);
    
}());
