// var app = angular.module('app', []);
// app.controller('myCtrl', function($scope) {
//   $scope.firstName= "John";
//   $scope.lastName= "Doe";
// });



// app.directive("directive", function() {
//   return {
//       restrict: 'CE',
//     template : "<h1>Made by a directive!</h1>"
//   };
// });

angular.module('app', [])
.controller('Search', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});