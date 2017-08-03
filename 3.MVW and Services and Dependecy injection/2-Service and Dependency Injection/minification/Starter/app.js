var myApp = angular.module('myApp', []);

/* compressed or minified but names are wrong*/
//myApp.controller("mainController",function(n,o){o.info(n)});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
    $log.info($scope); 
}
                                   ]);

/* minified and correct first elements in array don't change, these will be passed as paramters in the function (being last in the array)*/
//myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);