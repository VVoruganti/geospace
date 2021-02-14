var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {
    
    var firebaseRef = firebase.database().ref();

    // add ValueX to child of root named Text
    firebaseRef.child("Text").set("ValueX");

}