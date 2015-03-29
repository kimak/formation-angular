/**
 * Created by Pebie on 30/03/15.
 */
angular
    .module('avengersApp')
    .controller('HeroCtrl', function ($scope, $routeParams) {
        $scope.params = $routeParams;
    });