function Usignup() {
    var a = document.getElementById("uemail").value;
    var b = document.getElementById("upass").value;
    firebase.auth().createUserWithEmailAndPassword(a, b)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            window.location = "./SIGNIN.HTML"
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            alert("Sorry.Please Try Again")
        });
}

function login() {
    var c = document.getElementById("lemail").value;
    var d = document.getElementById("lpass").value;
    firebase.auth().signInWithEmailAndPassword(c, d)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            window.location = "./HOME.HTML"
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            alert("Sorry,Please Try Again")
        });

}





function Asignup() {

    var e = document.getElementById("email").value;
    var f = document.getElementById("password").value;
    saveAdminData()
    firebase.auth().createUserWithEmailAndPassword(e, f)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            window.location ="./asignin.HTML"
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });

}

function alogin() {
    var c = document.getElementById("aemail").value;
    var d = document.getElementById("apass").value;
    firebase.auth().signInWithEmailAndPassword(c, d)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            window.location = "./DASHBOARD.HTML"
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            alert("Sorry,Please Try Again")
        });

}

// FireStore //
var db = firebase.firestore();

 let emailEl = document.getElementById("email");
 let passEl = document.getElementById("password");
 let cityName = document.getElementById("city");
 let countryName = document.getElementById('country');
 let restaurantName = document.getElementById('name');


// Add a new document in collection "cities"
// For Admin




function saveAdminData(){
db.collection("user").doc().set({
  email: emailEl.value,
  password: passEl.value,
  city: cityName.value,
  country: countryName.value,
  restaurant: restaurantName.value,
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}

