var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine","html");

app.get('/', function(req, res){
    res.send('Routing test');
})

app.post('/serverTest', function(req, res) {
    res.send('You ve reached the post page '+ req.body);
  });

app.listen(8080, function () {
    console.log('Server Started');
})
