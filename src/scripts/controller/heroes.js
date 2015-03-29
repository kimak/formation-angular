angular.module("avengersApp").controller("HeroesCtrl", function ($scope) {
    $scope.orderProp = 'status';
    $scope.heroes = [
        {
            name: "Captain America",
            description: "Sénile et grabataire",
            status:"0",
            lastActivity:'30-03-1999',
            image:"/images/america.png",
            age:90
        },
        {
            name: "Iron Man",
            description: "Riche et célèbre",
            status:"1",
            lastActivity:'31-03-2015',
            image:"/images/iron.png",
            age:35
        },
        {
            name: "Giant Man",
            description: "Complètement perché",
            status:"2",
            lastActivity:'24-09-2013',
            image:"/images/giant.png",
            age:40
        },
        {
            name: "Hulk",
            description: "Géant vert, vendeur de maïs",
            status:"0",
            lastActivity:'03-10-2014',
            image:"/images/hulk.png",
            age:39
        },
        {
            name: "La veuve noire",
            description: "Gorgeous",
            status:"1",
            lastActivity:'10-02-2015',
            image:"/images/veuve.png",
            age:24
        },
        {
            name: "Thor",
            description: "Viking body buildé",
            status:"2",
            lastActivity:'07-06-2014',
            image:"/images/thor.png",
            age:46
        }
    ];


    $scope.click = function (hero) {

        $scope.selectedHero = hero;
    }

});