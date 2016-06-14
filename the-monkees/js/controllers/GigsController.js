(function() {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('GigsController', ['$scope', 'GigsService', function($scope, GigsService) {

            /*
             * load gigs from the json file
             */
            function loadGigs() {
                GigsService.getData().then(function(data) {
                    $scope.gigs = data.gigs;
                    return $scope.gigs;
                });
            }

            
            /*
            * Get todays 2 digit day E.g. 02
            */
            function getDay() {
                var d = new Date();
                var n = d.getDate();
                if (n.length == 1) {
                    n = '0' + n;
                }
                return n;
            }

            /*
            * Get todays three charactor month. E.g. MAR
            */
            function getMth() {
                var month = new Array();
                month[0] = "January";
                month[1] = "February";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "August";
                month[8] = "September";
                month[9] = "October";
                month[10] = "November";
                month[11] = "December";

                var d = new Date();
                var n = month[d.getMonth()];
                var m = n.slice(0, 3);
                return m.toUpperCase();
            }

            function initialize() {
                $scope.pageTitle1 = "Gigs";
                $scope.pageTitle2 = "Booking";
                $scope.pageSize = 6;
                $scope.currentPage = 1;

                loadGigs();
                getDay();
                getMth();
            }

            initialize();

        }]);

}());