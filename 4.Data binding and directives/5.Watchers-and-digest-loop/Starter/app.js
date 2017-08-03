var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue) {
        /* digest loop */
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);

    });

    $timeout(function() {
        //tell angular they need to check this in their watch list: 
        /* omdat setTimeOut van jQuery is, zal het niet meteen in een wrapper van de $scope variabele gestoken worden
           dus moet je manueel scope.$apply doen om er voor te zorgen dat de functie de watchlist een notificatie stuurt.
        */
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');

    }, 3000);

}]);
