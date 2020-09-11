const express = require('express');
const app = express();
const port = 5666;
const cors = require('cors');
const bodyParser = require('body-parser')



var twilio = require('twilio');

var accountSid = 'XXXXXXXXXX';
var authToken = 'XXXXXXXXXXXX';


var client = new twilio(accountSid, authToken);



app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/send-msg', function (req, res){

  client.messages
    .create({
      body: req.body.msgText,
      to: req.body.contact,
      mediaUrl: [req.body.selectedMeme],
      from: "+13237666670",
    })
    .then((message) => console.log(message.sid));

  res.send('SENT!');
});


app.listen(port, function(){
  console.log('server running!')

});
