angular.module("avengersApp").controller("HeroesCtrl", function ($scope, heroesFactory, $log, $location) {
    $scope.orderProp = "status";

    heroesFactory.getHeroes().then(function (data) {
        $scope.heroes = data;
    }, function (error) {
        $log.warn(error)
    });

    $scope.click = function (hero) {
        $scope.selectedHero = hero;
    };

    $scope.see = function (heroId) {
        $location.path('/heroes/' + heroId);
    };
});