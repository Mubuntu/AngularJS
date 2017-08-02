var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
$scope.name = '';
   $scope.alertClick = function(){
       alert("Clicked!");
       $scope.name = 'Patrick Frison'
   }
}]);

