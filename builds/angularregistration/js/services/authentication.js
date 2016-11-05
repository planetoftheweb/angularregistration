myApp.factory('Authentication', 
  ['$rootScope', '$firebaseAuth', '$firebaseObject',
  '$location', 'FIREBASE_URL',
  function($rootScope, $firebaseAuth, $firebaseObject,
    $location, FIREBASE_URL) {

  var ref = firebase.database().ref();
  var auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(authUser) {
    if (authUser) {
      var userRef = ref.child('users').child(authUser.uid);
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
    } else {
      $rootScope.currentUser = '';
    }
  });


  var myObject = {
    login: function(user) {
      auth.$signInWithEmailAndPassword(
        user.email,
        user.password
      ).then(function(regUser) {
        $location.path('/success');
      }).catch(function(error) {
       $rootScope.message = error.message;
      });
    }, //login

    logout: function() {
      return auth.$signOut();
    }, //logout

    requireAuth: function() {
      return auth.$requireSignIn();
    }, //require Authentication

    register: function(user) {
      auth.$createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then(function(regUser) {

        var regRef = ref.child('users')
        .child(regUser.uid).set({
          date: firebase.database.ServerValue.TIMESTAMP,
          regUser: regUser.uid,
          firstname: user.firstname,
          lastname: user.lastname,
          email:  user.email
        }); //user info

        myObject.login(user);

      }).catch(function(error) {
        $rootScope.message = error.message;
      }); // //createUser
    } // register
  };

  return myObject;
}]); //factory
