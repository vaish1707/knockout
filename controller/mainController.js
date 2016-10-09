var app = angular.module('senseApp', ['ngRoute']);

app.directive('autoCompleteDirective', function ($timeout) {
    return function (scope, iElement, iAttrs) {
        iElement.autocomplete({
            source: scope[iAttrs.uiItems],
            select: function () {
                $timeout(function () {
                    iElement.trigger('input');
                }, 0);
            }
        });
    };
});



app.config(function ($routeProvider) {
    $routeProvider
        .when("/addraw", {
            templateUrl: "templates/addraw.html"
        })
        .when("/addmedium", {
            templateUrl: "templates/addmedium.html"
        })
        .when("/addink", {
            templateUrl: "templates/addink.html"
        })
        .when("/calculate", {
            templateUrl: "templates/calculate.html"
        })
});

app.controller('autoCompleteController',  function ($scope) {
    $scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];
});

