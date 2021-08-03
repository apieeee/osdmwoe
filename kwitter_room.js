
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

  function adduser(){
  var addusername=document.getElementById("roomname").value   
  firebase.database().ref("/").child(addusername).update({key:addusername})
  redirectToRoomName(addusername)
  }

  var username=localStorage.getItem("username")
  document.getElementById("welcome").innerHTML="Welcome "+username

  function redirectToRoomName(name){
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
  
