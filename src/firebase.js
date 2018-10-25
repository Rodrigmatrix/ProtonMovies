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
    window.location.href = "index.html"
  }

  function loginStatus(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      console.log('Logged In');
      window.location.href = "userpage.html"
    }
    });
  }

  function signUp(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    var userName = document.getElementById("name").value;
    var userLastName = document.getElementById("last").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(userCredential){
      M.toast({html: 'Usuário cadastrado com sucesso'});  
      sendEmailVerification();
      writeUserData(userName,userLastName);
    })
    .catch(function(error) {
     // ERROR!! -> show the error, as you are already doing
     var errorToast = error;
     M.toast({html: error});  
     }
  )}
  
  function writeUserData(name,last_name) {
    firebase.database().ref('users/users' + getUserId()).set({
      name: name,
      last_name: last_name,
    });
  }
  function getUserId(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
      if(firebaseUser){
        console.log('Logged In');
        return firebaseUser;
      }
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
  function sendPasswordReset(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById(email);

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
    // An error happened.
    });
  }
  var user = firebase.auth().currentUser;