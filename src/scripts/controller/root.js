angular.module("avengersApp").controller("RootCtrl",function($scope){


    $scope.title = "AngularJs Formation";

    $scope.model = {
        title: "Hello avengers !"
    };

    $scope.getTitle = function(){
        return "My first Application";
    };


});