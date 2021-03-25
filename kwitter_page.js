//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room")
    username=localStorage.getItem("username")

    function send() {
          msg=document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                USER:username,
                MSG:msg,
                LIKES:0
             })
             document.getElementById("msg").value=""
    }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
//code for creating tag for username
user=message_data["USER"]
console.log(user)
usertag=`<h4>${user}<img src="tick.png" class="user_tick"></h4>`
//code for creating tag for message
message=message_data["MSG"]
console.log(message)
messagetag=`<h4>${message}</h4>`
//code for creating tag for like 
like=message_data["LIKES"]
console.log(like)
liketag=`<button class="btn btn-warning" id=${firebase_message_id} value=${like} onclick="updatelike(this.id)"><span class="glyphicon glyphicon-thumbs-up"></span> Like : ${like}</button>`

document.getElementById("output").innerHTML+=usertag+messagetag+liketag+`<hr>`
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("room")
      localStorage.removeItem("username")
      window.location="index.html"

}
function updatelike(buttonid) {
likes=document.getElementById(buttonid).value
updatedlikes=Number(likes)+1
firebase.database().ref(room_name).child(buttonid).update({
      LIKES:updatedlikes
})   
}