// SERVICES
weatherApp.service('cityService', function () {

    this.city = "Deurne, be";

});

weatherApp.service('weatherService',['$resource', function ($resource) {
    this.GetWeather = function (city, days) {
        var weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&appid=dc57d76dd32ed8cf08b46a5df83611d2", {
                callback: "JSON_CALLBACK"
            }, {
                get: {
                    method: "JSONP"
                }
            });

        return weatherAPI.get({
            q: city,
            cnt: days
        });
    }
}]);
