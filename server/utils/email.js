const nodemailer = require('nodemailer');

async function sendEmail(options){
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:false,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        }
    });
    const mailOptions = {
        from: 'varghab@gmail.com',
        to: options.to,
        subject: options.subject,
        text: options.message,
        
    }
    const res = await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;