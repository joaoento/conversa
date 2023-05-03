

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIPOloEglv2Xbs7n2ZheS9gcQeTR1x7kk",
    authDomain: "vamos-coversar.firebaseapp.com",
    databaseURL: "https://vamos-coversar-default-rtdb.firebaseio.com",
    projectId: "vamos-coversar",
    storageBucket: "vamos-coversar.appspot.com",
    messagingSenderId: "926116438037",
    appId: "1:926116438037:web:f9181bfa00fd15a1142e1c"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
  var userName=localStorage.getItem("userName");
  RoomName=localStorage.getItem("roomName");
function enviar(){
msg =document.getElementById("msg").value;
firebase.database().ref(RoomName).push({
    name:userName,
message:msg,like:0
});
document.getElementById("msg").value ="";
}
function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(RoomName).child(message_id).update({
		like : updated_likes  
	 });

}

      RoomName=localStorage.getItem("roomName");
function logout()
{
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location="index.html"
}