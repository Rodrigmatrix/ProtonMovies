// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBcHSr4rumQW6vlDrLB4fXz4IsnedEsOGQ",
    authDomain: "protonmovies.firebaseapp.com",
    databaseURL: "https://protonmovies.firebaseio.com",
    projectId: "protonmovies",
    storageBucket: "protonmovies.appspot.com",
    messagingSenderId: "404911651821"
  };
  firebase.initializeApp(config);

  function login(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(userCredential) {
      // Handle Errors here.
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
      M.toast({html: 'Sucesso'}); 
      window.location.href = "userpage.html"
    })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var errorToast = error;
    M.toast({html: error});  
    });
  }
  function logout(){
    firebase.auth().signOut();
  }

  function loginStatus(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      console.log('Logged In');
      window.location.href = "userpage.html"
    }
    else{
      M.toast({html: 'User not Logged In'}); 
    }
    });
  }

  function signUp(){

    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    var userName = document.getElementById("first_name").value;
    var userLastName = document.getElementById("last_name").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(userCredential){
      M.toast({html: 'Usuário cadastrado com sucesso'});  
      sendEmailVerification();
    })
    .catch(function(error) {
     // ERROR!! -> show the error, as you are already doing
     var errorToast = error;
     M.toast({html: error});  
     }
  )}
  
  function writeUserData(name,last_name) {
    firebase.database().ref('users/' + userId).set({
      name: name,
      last_name: last_name,
    });
  }
  function sendEmailVerification() {
        // [START sendemailverification]
        firebase.auth().currentUser.sendEmailVerification().then(function() {
          // Email Verification sent!
          // [START_EXCLUDE]
          M.toast({html: 'Confirme seu email'});
          // [END_EXCLUDE]
        });
        // [END sendemailverification]
  }
  var user = firebase.auth().currentUser;