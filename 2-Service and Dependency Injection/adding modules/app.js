var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
    
});

var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));