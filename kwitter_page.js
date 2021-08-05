//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDgjgRCDf9Uf6ISSaKDo146KDEi2xeZ-Is",
      authDomain: "chat-chat-b1604.firebaseapp.com",
      databaseURL: "https://chat-chat-b1604.firebaseio.com",
      projectId: "chat-chat-b1604",
      storageBucket: "chat-chat-b1604.appspot.com",
      messagingSenderId: "980076612034",
      appId: "1:980076612034:web:24620ae9fe23f62caaae5b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "key") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data["name"]
message = message_data["message"]
likes = message_data["like"]
name_tag = "<h4> " + name +"<img class='user_tick' src='tick.png'></h4>"
message_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span></button><hr>";

row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
      room_name=localStorage.getItem("room_name")
      username=localStorage.getItem("username")
getData();
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

function send(){
      msg=document.getElementById("writemessage").value 
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("writemessage").value = "";
}
function updateLike(message_id){
button_id=message_id;
likes = document.getElementById(button_id).value;
updated_likes= Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
})
}