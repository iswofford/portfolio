const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

// use cors to allow cross origin resource sharing
app.use(cors());
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  res.header("Access-Control-Max-Age", "3600");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.setHeader('Access-Control-Allow-Headers', 'Set-Cookie');
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  next();
});

const email = process.env.MAILER_EMAIL_ID || 'irinaswofford@gmail.com'
const pass = process.env.MAILER_PASSWORD 
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const smtpTransport = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
  auth: {
    user: email,
    pass: pass
  }
});

const handlebarsOptions = {
  viewPath: path.join(__dirname, 'is-portfolio', 'templates'),
  extName: '.html'
};

smtpTransport.use('compile', hbs(handlebarsOptions)); 

app.post('/sendemail', (req, res) => {
  const { name: senderName, email: senderEmail, subject: emailSubject, message: emailMessage } = req.body;
  
  const mailData = {
    to: email,
    subject: emailSubject,
    from: senderEmail,
    template: 'contact-email',
    context: {
      name: senderName,
      email: senderEmail,
      message: emailMessage
    }
  };
  
  smtpTransport.sendMail(mailData, function(err) {
    if (!err) {
    return  res.sendFile(path.resolve(__dirname, 'templates', 'contact-email.html'));

          } else {
            
            console.log(err);
            return res.status(500).send(err);
          }
        });
      });
      
      
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
