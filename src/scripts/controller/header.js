angular.module("avengersApp").controller("HeaderCtrl",function($scope, $filter){

    $scope.currentDate = new Date().getTime();

    $scope.model = {
        title: "hello avengers !"
    };

    $scope.getTitle = function(){
        return $filter('capitalize')("my first Application");
    };

});