angular.module("avengersApp").controller("MainCtrl",function($scope){


    $scope.title = "AngularJs Formation";

    $scope.model = {
        title: "Hello avengers !"
    };

    $scope.getTitle = function(){
        return "My first Application";
    };


});