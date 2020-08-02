var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var nodemailer = require('nodemailer');


app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine","html");

app.get('/', function(req, res){
    res.send('Routing test');
})

app.post('/serverTest', function(req, res) {
    console.log(req.body)
    res.send('You ve reached the post page '+ req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'email',
          pass: 'password'
        }
      });
      
      var mailOptions = {
        from: 'srikantathikari@gmail.com',
        to: 'yogitareddyb@gmail.com',
        subject: 'Sending Email for our first Order',
        text: req.body.FirstName+' has placed an order, you can reach '+ req.body.FirstName+' @ '+ req.body.PhoneNumber
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  });

  

app.listen(8080, function () {
    console.log('Server Started');
})
