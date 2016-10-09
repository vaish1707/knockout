var app = angular.module('senseApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/addraw",{
        templateUrl:"templates/addraw.html"
    })
    .when("/addmedium",{
        templateUrl:"templates/addmedium.html"
    })
    .when("/addink",{
        templateUrl:"templates/addink.html"
    })
    .when("/calculate",{
        templateUrl:"templates/calculate.html"
    })
});

