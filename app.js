

document.getElementById('sendBtn').addEventListener("click", sendMsg);

var selectedMeme;

 document
   .getElementById("resultImgs")
   .addEventListener("click", function (evt) {
     selectedMeme = evt.target.currentSrc;
     console.log(selectedMeme);
   });


function sendMsg(client) {

  $.ajax({
    method: "POST",
    url: "http://localhost:5666/send-msg",
    data: {
    contact: contactInput.value,
    msgText: msgTextInput.value,
    selectedMeme
    },

    success: successMsg,
    error: errorMsg
  });

}

function successMsg(result) {
  alert(result)
}

function errorMsg(error) {
  alert(error)
}
