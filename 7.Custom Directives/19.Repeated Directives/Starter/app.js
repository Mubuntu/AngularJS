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

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.people = [{
        name: 'patrick Frison',
        address: 'ten eekhovelei 62',
        city: 'Deurne',
        state: 'Antwerpen',
        zip: '2100'
    }, {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }, {
        name: 'Jane Doe',
        address: '666 Second St.',
        city: 'New York',
        state: 'NY',
        zip: '22222'
    }, {
        name: 'James Doe',
        address: '444 Third St.',
        city: 'New York',
        state: 'NY',
        zip: '44444'
    }]

    $scope.formattedAddress = function (person) {

        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;

    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {



}]);

myApp.directive("searchResult", function () {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        }
    }
});
