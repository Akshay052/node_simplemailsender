var nodemailer = require('nodemailer');
const mails = require('./mailIds.js');
const MessageText = require('./messageText')


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akshayjadhav052.aj@gmail.com',
    pass: '8149820054'
  }
});

mails.forEach((mail)=>{
  console.log(mail);

      const message = {
        from: 'akshayjadhav052.aj@gmail.com',
        to: mail,
        subject: 'ML Engineer/Analyst Application',
        text: MessageText.toString(),
        attachments: [
          {  
              filename: 'Resume_Abhilasha.pdf',
              path: './resume/Resume_Abhilasha.pdf'
          }
      ]
      };

      transporter.sendMail(message, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

});