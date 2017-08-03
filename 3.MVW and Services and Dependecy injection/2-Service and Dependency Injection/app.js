"use strict";
// MODULE
/*alles wordt in een module geplaatst zodat de global namespace niet wordt ingenomen door verschillende functies maar door een variabele (de module) die alle 
controllers bevat voor een applicatie*/
var myApp = angular.module('myApp', []); //TUSSEN DE HAAKJES komen een list van dependencies oftewel andere modules die gedefineerd zijn voor angular 
/* je moet de modules nog wel toevoegen aan je script en dan kan je module toevoegen aan je module object*/

// CONTROLLERS
myApp.controller('mainController', function ($scope, $log, $filter) {
    
    $scope.name = 'Patrick';
    $scope.formattedname = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.error($scope.formattedname);
    
    
    
});

/*var searchPeople = function (firstName,lastName,age,occupation){
    return 'Patrick Frison';
};*/

//console.log(angular.injector().annotate(searchPeople));


