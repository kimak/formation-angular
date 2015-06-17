/**
 * Created by Pebie on 28/03/15.
 */
angular.module('avengersApp').directive('heroInfo', ['$interval', function () {
    return {
        templateUrl: '/scripts/heroes/directives/heroInfo.html',
        restrict: 'E',
        scope: {
            hero: '=info',
            format: '='
        },
        link: link
    };

    function link(scope, element, attrs) {
        function updateStatus() {
            if (scope.hero.status ==='1') {
                scope.lastActivity = 'En ce moment';
                scope.since = null;
                element.css({opacity: 0.4});
            } else {
                element.css({opacity: 1});
                scope.lastActivity = moment(scope.hero.lastActivity, 'DDMMYYYY', 'fr').format('LL');
                scope.since = moment(scope.hero.lastActivity, 'DDMMYYYY', 'fr').fromNow();
            }
        }

        attrs.$observe('status', function(value){
            updateStatus();
        })
    }
}]);