angular.module("avengersApp").controller("RootCtrl",function($scope){


    $scope.title = "AngularJs Formation";

    $scope.model = {
        title: "hello avengers !"
    };

    $scope.getTitle = function(){
        return "My first Application";
    };


});