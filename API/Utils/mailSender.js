const nodemailer = require('nodemailer');

const mailSender = async (email, title, body, attachments) => {
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            port:process.env.MAIL_PORT,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        })

        let info = await transporter.sendMail({
            from: 'Track Always',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
            attachments: attachments,
        })

        console.log(info);
        return info;
    } catch (error) {
        console.log('error occured while creating mail transport: ', error);
        console.log(error.message);
    }
}

module.exports = mailSender