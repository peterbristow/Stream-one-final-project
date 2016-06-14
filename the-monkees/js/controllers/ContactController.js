(function () {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('ContactController', ['$scope', function ($scope) {
            function initialize() {
                $scope.pageTitle = "Contact Us";
                
                // Form stuff below
                $scope.form = {};
                $scope.submitted = false;
            }

            initialize();

            $scope.submit = function(form) {
                if (form.$valid) {
                    $scope.submitted = false;
                    $scope.form = {};
                    return;
                }
                $scope.submitted = true;
            };


        }]);

}());