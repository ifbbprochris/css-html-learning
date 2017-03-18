var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/view/task-one.html');
});

app.listen(4330);
