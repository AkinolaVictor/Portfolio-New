require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const port = require('./config');
const bodyParser = require('body-parser');
const firebase = require('./firebase/firebase');
const data = require('./firebase/Data');
const database = firebase.database();
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// ssn.kk
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
// console.log(data);

// console.log(process.env.CLIENT_ID);

// app.get('/', (req, res)=>{
//     return res.send(`Hello World is listening at port ${port}`);
// })

app.get('/api/saveAllData', async(req, res)=>{
    await database.ref().set(data);
    return res.send(data);
})

app.get('/api/home', async(req, res)=>{
    database.ref('home')
    .once('value')
    .then((snapshot)=>{
        const about = snapshot.val();
        return res.send(about);
    })
    .catch((e)=>{
        console.log('There was an error', e);
        return;
    })
})

app.get('/api/project', async(req, res)=>{
    database.ref('project')
    .once('value')
    .then((snapshot)=>{
        const about = snapshot.val();
        return res.send(about);
    })
    .catch((e)=>{
        console.log('There was an error', e);
        return;
    })
})

app.get('/api/about', async(req, res)=>{
    database.ref('about')
    .once('value')
    .then((snapshot)=>{
        const about = snapshot.val();
        return res.send(about);
    })
    .catch((e)=>{
        console.log('There was an error', e);
        return;
    })
})

app.post('/api/sendMail', async(req, res)=>{
    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
          process.env.CLIENT_ID,
          process.env.CLIENT_SECRET,
          "https://developers.google.com/oauthplayground"
        );
      
        oauth2Client.setCredentials({
          refresh_token: process.env.REFRESH_TOKEN
        });
      
        const accessToken = await new Promise((resolve, reject) => {
          oauth2Client.getAccessToken((err, token) => {
            if (err) {
              console.log('This is an Error');
              reject();
            }
            resolve(token);
          });
        });
      
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            tls: {
                rejectUnauthorized: false
            }
          }
        });
      
        return transporter;
    };

    //emailOptions - who sends what to whom
    const sendEmail = async (emailOptions) => {
        let emailTransporter = await createTransporter();
        await emailTransporter.sendMail(emailOptions, (error, info)=> {
            if(error){
                res.send({bool: false, message: 'Sorry, Message not sent!!!'});
                return console.log('Sorry, Message not sent!!!');
            }else{
                res.send({bool: true, message: 'Thank you, Your message has been delivered'});
                return console.log('Message Sent');
            }
        });
    };

    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.FirstName} ${req.body.LastName}</li>
        <li>Email: ${req.body['E-mail']}</li>
        <li>Phone: ${req.body.Phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    sendEmail({
        subject: "Portfolio Contact Form",
        // text: "I am sending an email from nodemailer!",
        html: output, // html body
        to: process.env.RECEIVER,
        from: process.env.EMAIL,
    });
})

if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));

    // handle SPA
    app.get(/.*/, (req, res)=>res.sendFile(__dirname + '/public/index.html'));
}
app.listen(port, ()=> console.log(`App listening at port ${port}`));