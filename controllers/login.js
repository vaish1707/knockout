var app = angular.module('senseApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html'
        });
});

app.controller('loginController',function($scope,$location){
 $scope.submit = function(){
     var username = $scope.username;
     var password = $scope.password;
     if($scope.username == 'admin' && $scope.password == 'admin'){
         $location.path('/dashboard');
     } else {
         alert('Wrong Stuff');
     }
 };
});
