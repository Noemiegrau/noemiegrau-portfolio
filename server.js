const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
    let {text} = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "noemiegrau@outlook.fr",
        subject: "test email",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
        
        <p>All the best, Darwin</p>
        </div>`
    })
})

app.listen((process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000")
})
)
































// const transporter = nodemailer.createTransport({
//   host: "smtp-mail.outlook.com", //replace with your email provider
//   port: 587, //if not working try 25, 465, 587 or 2525 // 465 is always true, the rest is false
//   secure: false,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// // verify connection configuration
// transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   app.post('/send', (req, res, next) => {
//     var name = req.body.name
//     var email = req.body.email
//     var subject = req.body.subject
//     var message = req.body.message
  
//     var mail = {
//       from: name,
//       to: 'noemiegrau@outlook.fr', // receiver email,
//       subject: subject,
//       text: message
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: 'fail'
//         })
//       } else {
//         res.json({
//          status: 'success'
//         })
//       }
//     })
//   });