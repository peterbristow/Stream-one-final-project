(function() {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('NavController', ['$scope', '$location', function($scope, $location){
        $scope.isActive = function(destination){
            return destination === $location.path();
        };
    }]);
}());