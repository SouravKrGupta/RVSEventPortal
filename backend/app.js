var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/register' , function (req ,res ){

  // code here 
});

app.post('/login' , function (req ,res ){

  // code here 

});

app.post('/logout' , function (req ,res ){

  // code here 

});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});