var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com',
    pass: 'password'
  }
});

var mailFactory = {
  from: 'yourgmail@gmail.com',
  to: 'knowledgefactory4upeoples@gmail.com',
  subject: 'Greetings from Node.js',
  html: '<h1 style="color:green;">Welcome</h1><p>Node.js is easy</p>'
};

transporter.sendMail(mailFactory, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});