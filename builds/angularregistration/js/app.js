var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', function($scope) {
  $scope.message = "Welcome to my App";
}])