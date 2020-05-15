

document.getElementById('sendBtn').addEventListener("click", sendMsg);

var selectedMeme;

 document
   .getElementById("resultImgs")
   .addEventListener("click", function (evt) {
     selectedMeme = evt.target.currentSrc;
     console.log(selectedMeme);
   });




//........... chat API ............//

// let client = require('./config.js');


function sendMsg(client) {

  $.ajax({
    method: "POST",
    url: "http://localhost:5666/send-msg",
    success: successMsg,
    error: errorMsg,

    data: {
      contact: contactInput.value,
      msgText: msgTextInput.value,
      selectedMeme
    },
  });



}

function successMsg(result) {
  alert(result)
}

function errorMsg(error) {
  alert(error)
}

//........................................//
//.............img search API..............//








//.......................................//
