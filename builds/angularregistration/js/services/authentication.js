myApp.factory('Authentication',
  ['$rootScope', '$firebaseAuth',
  function($rootScope, $firebaseAuth) {

  var ref = firebase.database().ref();
  var auth = $firebaseAuth();

  return {
    login: function(user) {
      $rootScope.message = "Welcome " + $rootScope.user.email;
    }, //login

    register: function(user) {
      auth.$createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then(function(regUser) {
        $rootScope.message = "Hi " + user.firstname +
        ", Thanks for registering";
      }).catch(function(error) {
        $rootScope.message = error.message;
      }); //createUserWithEmailAndPassword
    } //register

  }; //return
}]); //factory