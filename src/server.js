const express = require("express");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());



let transporter = nodemailer.createTransport(smtpTransport(
    {
        
        host: "mail.aboghadeer.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.WORD
        },
        tls: {
            rejectUnauthorized: false
        },
        logger: true
    }
));

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});


app.post("/send", (req, res) => {
    console.log(req.body);
    let mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: req.body.subject,
        text: req.body.text,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: "fail"
            })
        } else {
            console.log("== Message Sent ==");
            res.json({ status: "Email sent", data: data });
        }
    });
})


const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});