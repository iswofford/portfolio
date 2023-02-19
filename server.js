const express=require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const dotenv = require('dotenv');
dotenv.config();
cors = require('cors'); //do not check in the production 
//use cors to allow cross origin resource sharing

app.use(cors())
  app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader('Access-Control-Allow-Headers', 'Set-Cookie')
    res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
    next();
  })
  

const email = process.env.MAILER_EMAIL_ID || 'irinaswofford@gmail.com'
const pass = process.env.MAILER_PASSWORD || 'Daniela2012' 

const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var smtpTransport = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
    auth: {
      user: email,
      pass: pass
    }
  });
  
  var handlebarsOptions = {
    viewEngine: 'handlebars',
    partialsDir: path.resolve('./templates'),
    viewPath: path.resolve('./templates'),
    extName: '.html'
  };
  
  smtpTransport.use('compile', hbs(handlebarsOptions)); 


  app.post('/sendemail', (req, res) => {
    const { name } = req.body;
    res.json({ name });
  
    smtpTransport.sendMail(res, function(err) {
      if (!err) {
        return res.sendFile(path.resolve('./templates/contact-email.html'));
      } else {
        return done(err);
      }
    });
  });
  
  
  

  app.listen(PORT, (req, res) => {
    console.log("server started")
  });