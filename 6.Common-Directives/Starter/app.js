var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 3;
    $scope.rules = [
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used somewhere else" },

        { rulename: "Must be SWAG" }
    ];
    console.log($scope.rules);
}]);

