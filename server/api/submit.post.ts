import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.brevo.user,
      pass: config.brevo.smtp,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Mail" dragopsicologia@gmail.com', // sender address
    to: 'dragopsicologia@gmail.com', // list of receivers
    subject: 'Hello ✔✔', // Subject line
    text: body.Message,
  });

  console.log('Message sent: %s', info.messageId);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent', info }),
  };
});
