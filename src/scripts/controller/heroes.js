angular.module("avengersApp").controller("HeroesCtrl", function ($scope, heroesFactory, $log) {
    $scope.orderProp = "status";
    heroesFactory.getHeroes().then(function (data) {
        $scope.heroes = data;
    }, function (error) {
        $log.warn(error)
    });

    $scope.click = function (hero) {

        $scope.selectedHero = hero;
    }

});