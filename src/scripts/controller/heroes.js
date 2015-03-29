angular.module("avengersApp").controller("HeroesCtrl", function ($scope) {
    $scope.orderProp = 'status';
    $scope.heroes = [
        {
            name: "Captain America",
            description: "Sénile et grabataire",
            status: "0",
            image: "/images/america.png",
            age: 90
        },
        {
            name: "Iron Man",
            description: "Riche et célèbre",
            status: "1",
            image: "/images/iron.png",
            age: 35
        },
        {
            name: "Giant Man",
            description: "Complètement perché",
            status: "2",
            image: "/images/giant.png",
            age: 40
        },
        {
            name: "Hulk",
            description: "Géant vert, vendeur de maïs",
            status: "0",
            image: "/images/hulk.png",
            age: 39
        },
        {
            name: "La veuve noire",
            description: "Gorgeous",
            status: "1",
            image: "/images/veuve.png",
            age: 24
        },
        {
            name: "Thor",
            description: "Viking body buildé",
            status: "2",
            image: "/images/thor.png",
            age: 46
        }
    ];


    $scope.click = function (hero) {

        $scope.selectedHero = hero;
    }

});