angular.module("avengersApp").controller("HeaderCtrl", function ($scope, $filter, $routeParams) {

    $scope.currentDate = new Date().getTime();

    $scope.model = {
        title: "hello avengers !"
    };

    $scope.getTitle = function () {
        return $filter('capitalize')("my first Application");
    };

    $scope.$on('$routeChangeSuccess', function () {
        if ($routeParams.id) {
            $scope.model.title = "Vous êtes sur la page du héro n° " + $routeParams.id;
        } else {
            $scope.model.title = "hello avengers !";
        }
    });
});