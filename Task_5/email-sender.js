var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elegidodigital@gmail.com', //your email address
    pass: '********', // type your password
  },
});
//email structure
var mailOptions = {
  from: 'elegidodigital@gmail.com', //re-ype your email address
  to: 'dennojunior@gmail.com', // recievers email address
  subject: 'Sending Email using Node.js',
  html: '<h1>Hello! Welcome</h1><p>I am sending this from my project code in email-sender.js script.</p>',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
