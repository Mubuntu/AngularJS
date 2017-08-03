var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

});
myApp.service('nameService', function () {
    //function that will contain methods and object in service
    var self = this; //reference to function of service itself
    this.name = "Patrick frison";
    this.nameLength = function () {
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    $scope.name = nameService.name;
    
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    $log.log(nameService.name); //singleton
    $log.log(nameService.nameLength()); //namelength geeft de functie trg als string asl je het called geeft het resultaat van de functie trg dus namelength()


}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 1;
    $scope.name = nameService.name;
     $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });

}]);
