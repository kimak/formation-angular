angular.module("avengersApp").controller("RootCtrl",function($scope){


    $scope.title = "AngularJs Formation";

    $scope.currentDate = new Date().getTime();

    $scope.model = {
        title: "hello avengers !"
    };

    $scope.getTitle = function(){
        return "my first Application";
    };


});