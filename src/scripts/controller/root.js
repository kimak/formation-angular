angular.module("avengersApp").controller("RootCtrl",function($scope, $filter){


    $scope.title = "AngularJs Formation";

    $scope.currentDate = new Date().getTime();

    $scope.model = {
        title: "hello avengers !"
    };

    $scope.getTitle = function(){
        return $filter('capitalize')("my first Application");
    };


});