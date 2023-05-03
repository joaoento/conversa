
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


  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
