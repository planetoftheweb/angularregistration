myApp.controller('RegistrationController', ['$scope', function($scope) {
  
  $scope.login = function() {
    $scope.message = "Welcome " + $scope.user.email;
  };

  $scope.register = function() {
    $scope.message = "Welcome " + $scope.user.firstname;
  };

}]);