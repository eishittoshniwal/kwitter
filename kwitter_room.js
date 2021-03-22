// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBFgS93y07bt_drN1PjTAq2n92bpQw98Yw",
      authDomain: "kwitter-a70f0.firebaseapp.com",
      databaseURL: "https://kwitter-a70f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-a70f0",
      storageBucket: "kwitter-a70f0.appspot.com",
      messagingSenderId: "1036636842934",
      appId: "1:1036636842934:web:8a5827af1a879957d1ef17"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

//GET USERNAME FROM LOCAL STORAGE
username=localStorage.getItem("username")
document.getElementById("welcomeuser").innerHTML="Welcome "+ username

//create mainfolder by the name of roomname in the database
function addroom() {
roomname=document.getElementById("addroom").value 
firebase.database().ref("/").child(roomname).update({
      status:"roomname"
})
localStorage.setItem("room",roomname)
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
       roomtag=`<div class="room_name" id=${Room_names} onclick= "gotoroom(this.id)">${Room_names}</div> <hr>`
       document.getElementById("output").innerHTML += roomtag 
                     
       
      //End code
      });});}
getData();
function gotoroom(room) {
      localStorage.setItem("room",room)
      window.location="kwitter_page.html"
}
