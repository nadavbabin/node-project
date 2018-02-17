var express = require('express');
var app = express();
//dd
app.get('/',function(req,res) {
  res.send("Hello World bitches!!");
});

app.listen(3000);
