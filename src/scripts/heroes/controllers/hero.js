/**
 * Created by Pebie on 30/03/15.
 */
angular
    .module('avengersApp')
    .controller('HeroCtrl', function ($scope, $routeParams, $location) {
        $scope.params = $routeParams;
        $scope.back = function(){
            $location.path('/heroes');
        }
    });