angular.module("avengersApp").controller("HeroesCtrl", function ($scope, $filter) {

    $scope.heroes = [
        {
            name: "Captain America",
            description: "Sénile et grabataire",
            status:"unavailable"
        },
        {
            name: "Iron Man",
            description: "Riche et célèbre",
            status:"available"
        },
        {
            name: "Giant Man",
            description: "Complètement perché",
            status:"busy"
        },
        {
            name: "Hulk",
            description: "Géant vert, vendeur de maïs",
            status:"busy"
        },
        {
            name: "La veuve noire",
            description: "Gorgeous",
            status:"available"
        },
        {
            name: "Thor",
            description: "Viking body buildé",
            status:"unavailable"
        }
    ];

});