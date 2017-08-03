//DIRECTIVES
weatherApp.directive('weatherReport', function () {
    return {
        restrict: "E",
        templateUrl: 'directives/weatherReport.htm',
        replace: true,
        scope: {
            weatherDay: "=", //object
            convertToStandard: "&", //functie
            convertToDate: "&",
            dateFormat: "@" //string
        }
    }
});