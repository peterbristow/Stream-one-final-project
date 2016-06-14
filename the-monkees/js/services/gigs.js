(function () {
    'use strict';
    angular.module('theMonkeesApp.services')
        .factory('GigsService', ['$http', function ($http) {

            return {
                getData: function () {
                    return $http.get('data/gigs.json')
                        .then(function (response) {
                            return response.data;
                        })
                        .catch(function (err) {
                            console.error('ERROR', err);
                        });
                }
            };

        }]);

}());