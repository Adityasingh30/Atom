const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', //smtp.gmail.com  //in place of service use host...
  secure: false, //true
  port: 25, //465
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.sendEMail = function(mailRequest) {
  return new Promise(function(resolve, reject) {
    transporter.sendMail(mailRequest, (error, info) => {
      if (error) {
        console.error('Email error:', error);
        reject(error);
      } else {
        console.log('Email info:', info); // log detailed info
        resolve(info);
      }
    });
  });
};


module.exports = transporter;
