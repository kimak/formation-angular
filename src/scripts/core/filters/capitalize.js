/**
 * Created by Pebie on 29/03/15.
 */
angular.module("avengersApp.filters", [])
    .filter("capitalize", function () {
    return function (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
});