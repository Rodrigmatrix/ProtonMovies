function configurarSala(){
    var db = db.collection('sala').doc('sala1');
    // Set the 'capital' field of the city
var updateSingle = db.update({
    filme: "Vingadores Guerra Infinita"
});
   // var db = firebase.firestore();
   // var docRef = db.collection('sala').doc('sala1');
    //var setAda = docRef.set({
     //   filme: 'Vingadores Guerra Infinita',
      //  horário: '13:30'
//});
}
function comprarIngresso(array){
    firebase.database().ref('users/' + userId).set({
      arrayIngressos: array
    });
  
}