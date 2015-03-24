angular.module("avengersApp").controller("HeroesCtrl", function ($scope, $filter) {

    $scope.heroes = [
        {
            name: "Captain America",
            description: "Sénile et grabataire",
            status:"0",
            image:"/images/america.png",
            age:1
        },
        {
            name: "Iron Man",
            description: "Riche et célèbre",
            status:"1",
            image:"/images/iron.png",
            age:2
        },
        {
            name: "Giant Man",
            description: "Complètement perché",
            status:"2",
            image:"/images/giant.png",
            age:5
        },
        {
            name: "Hulk",
            description: "Géant vert, vendeur de maïs",
            status:"0",
            image:"/images/hulk.png",
            age:8
        },
        {
            name: "La veuve noire",
            description: "Gorgeous",
            status:"1",
            image:"/images/veuve.png",
            age:4
        },
        {
            name: "Thor",
            description: "Viking body buildé",
            status:"2",
            image:"/images/thor.png",
            age:12
        }
    ];

});