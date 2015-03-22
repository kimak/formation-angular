angular.module("avengersApp").controller("MainCtrl",function($scope){


    $scope.title = "AngularJs Formation";

    $scope.currentDate = new Date().getTime();

    $scope.model = {
        title: "hello avengers !"
    };

    $scope.getTitle = function(){
        return "My first Application";
    };


});