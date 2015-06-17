'use strict';

var app = angular
    .module("avengersApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/heroes', {
                templateUrl: 'scripts/heroes/views/heroes.html',
                controller: 'HeroesCtrl'
            })
            .when('/heroes/:id',{
                controller:'HeroCtrl',
                templateUrl: 'scripts/heroes/views/hero.html'
            })
            .otherwise('/heroes');
    });



