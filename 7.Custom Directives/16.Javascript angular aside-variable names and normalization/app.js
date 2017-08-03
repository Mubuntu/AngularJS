var myApp = angular.module('myApp', ['ngRoute']);
var myApp = angular.module('myApp', ['ngRoute']);
//var result-link-href='#'; compiler herkent dit niet wel camelCase
//var resultLinkHref='#';

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



}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {



}]);

myApp.directive("searchResult", function () {
    //function will return directives object
    return {
        template: '<a href="#" class="list-group-item"> <
            h4 class = "list-group-item-heading" > Doe,
        John < /h4> <
        p class = "list-group-item-text" > 62 ten eekhovelei,
        2100,
        Deurne < /p> <
        /a>' / / html outputted when directive is used
    }
});
