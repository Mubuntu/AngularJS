// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

});

// SERVICES
weatherApp.service('cityService', function () {

    this.city = "Deurne, be";

});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;
    //$scope.APIkey = '&appid=dc57d76dd32ed8cf08b46a5df83611d2';

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    //JSON OPHALEN VAN WEER met APIKEY
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&appid=dc57d76dd32ed8cf08b46a5df83611d2", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days
    });

    $scope.convertToCelsius = function (degK) {

        var degC = Math.round(degK - 273.15);
        var strDegC = degC + ' degrees Celsius';
        return strDegC;
    };

    //KELVIN TO FAHRENHEIT
    $scope.convertToFahrenheit = function (degK) {
        return Math.round(1.8 * (degK - 273.15) + 32);
    };
    //DATE CONVERSION
    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000).toISOString().slice(0, 10);

    };
}]);
