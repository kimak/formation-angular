/**
 * Created by Pebie on 29/03/15.
 */
(function () {
    'use strict';
    function heroesFactory($http, $q, urlConfig) {

        var service = {
            getHeroes: _getHeroes
        };

        return service;

        function _getHeroes() {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES_LIST).then(function (obj) {
                defer.resolve(obj.data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    }

    angular.module('avengersApp')
        .factory('heroesFactory', heroesFactory);

})();