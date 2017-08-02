var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter','$log', function($scope,$filter,$log) {

    $scope.handle='';
    $scope.lowercasehandle = tolower($scope.website);
    function tolower(uppercase){
        return $filter('lowercase')(uppercase);
    } 
}]);

