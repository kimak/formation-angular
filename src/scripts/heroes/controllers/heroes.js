angular.module("avengersApp").controller("HeroesCtrl", function ($scope, heroesFactory, $log, $location) {
    $scope.orderProp = "status";
    heroesFactory.getHeroes().then(function (data) {
        $scope.heroes = data;
    }, function (error) {
        $log.warn(error)
    });

    $scope.click = function (hero) {
        $location.path('/heroes/' + hero.id);
        $scope.selectedHero = hero;
    }

});