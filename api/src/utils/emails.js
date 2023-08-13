const nodemailer = require('nodemailer');

const {EMAIL_SERVICE, DIR_EMAIL, DIR_PASSWORD} = process.env

// Configura el objeto de transporte nodemailer con tus credenciales de correo
const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE, // o cualquier otro proveedor de correo
  auth: {
    user: DIR_EMAIL,
    pass: DIR_PASSWORD
  }
});

// Función para enviar correos electrónicos
function sendEmail(destinatario, asunto, contenido) {
  const mailOptions = {
    from: DIR_EMAIL,
    to: destinatario,
    subject: asunto,
    text: contenido
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Correo enviado: ' + info.response);
        resolve(info);
      }
    });
  });
}

module.exports = {
    sendEmail,
};