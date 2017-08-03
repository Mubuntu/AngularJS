// CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location', 'cityService', function ($scope,$location, cityService) {

    $scope.city = cityService.city;
    //$scope.APIkey = '&appid=dc57d76dd32ed8cf08b46a5df83611d2';

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
    //submit 
    $scope.submit = function(){
        $location.path("/forecast");
    };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService','weatherService', function ($scope, $routeParams, cityService,weatherService) {

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    //JSON OPHALEN VAN WEER met APIKEY
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

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