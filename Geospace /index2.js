var firebaseRef = firebase.database().ref();

firebaseRef.child("Points").once().then(function(snapshot) {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        console.log("hello");
    }
    else {
        console.log("No data available");
    }
}).catch(function(error) {
    console.error(error);
});
