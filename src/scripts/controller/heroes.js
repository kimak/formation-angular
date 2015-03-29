angular.module("avengersApp").controller("HeroesCtrl", function ($scope, heroesFactory) {
    $scope.orderProp = "status";
    $scope.heroes = heroesFactory.getHeroes();

    $scope.click = function (hero) {

        $scope.selectedHero = hero;
    }

});