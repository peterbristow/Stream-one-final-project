(function () {
    'use strict';
    // $scope.title = 'Title';  {{title}}
    // controllerAs solution: this.title = 'Title';  {{vm.title}}
    angular.module('theMonkeesApp', [
            'ngRoute',
            'bootstrapLightbox',
            'theMonkeesApp.controllers',
            //'theMonkeesApp.directives',
            'theMonkeesApp.services'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    controller: 'HomeController',
                    //controllerAs: 'vm',
                    templateUrl: 'views/home.html'
                })
                .when('/bio', {
                    controller: 'BioController',
                    templateUrl: 'views/bio.html'
                })
                .when('/media', {
                    controller: 'MediaController',
                    templateUrl: 'views/media.html'
                })
                .when('/gigs', {
                    controller: 'GigsController',
                    templateUrl: 'views/gigs.html'
                })
                .when('/contact', {
                    controller: 'ContactController',
                    templateUrl: 'views/contact.html'
                })
                .otherwise({
                    redirectTo: '/home'
                });
                
        })
        .filter('startFrom', function() {
            return function(data, start) {
                if (!data || !data.length) { return; }
                return data.slice(start);
            };
        });
}());