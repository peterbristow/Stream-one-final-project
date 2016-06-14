(function () {
    'use strict';
    angular.module('theMonkeesApp.services')
        .factory('MediaService', ['$http', function ($http) {

            return {
                getData: function () {
                    return $http.get('data/media.json')
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