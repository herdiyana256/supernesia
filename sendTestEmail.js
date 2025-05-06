const nodemailer = require('nodemailer');

// Konfigurasi transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // Gunakan port 465 untuk SSL
  secure: true, // Pastikan SSL diaktifkan
  auth: {
    user: 'info@supernesia.id', // Ganti dengan email Anda
    pass: 'tQ5f2X+4xXu*', // Ganti dengan password email Anda
  },
});

// Opsi email yang akan dikirim
const mailOptions = {
  from: 'info@supernesia.id', // Ganti dengan email Anda
  to: 'info@supernesia.id', // Email tujuan (misalnya, kirim ke diri sendiri)
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Kirim email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
