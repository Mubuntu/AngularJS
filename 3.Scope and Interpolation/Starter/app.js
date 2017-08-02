var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$log','$timeout',function($scope, $log,$timeout) {

    $scope.name='Patrick';
    $log.info($scope.name);
    $timeout(function(){
        //na 3000 miliseconden veranderd de variabele zijn waarde
        $scope.name = 'everybody';
    }, 3000);
    $log.info($scope.name); //merkop dat de name variabel nog steeds patrick is

}]);
