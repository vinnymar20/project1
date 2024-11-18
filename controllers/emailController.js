const nodemailer = require('nodemailer');

// Email sending logic
exports.sendEmail = async (req, res) => {
  const { email, subject, name} = req.body;

  if (!email || !subject || !name) {
    return res.status(400).send({ success: false, error: 'Email, subject, and message are required.' });
  }

  // Setup SMTP transporter (example using Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vinny_marande@ifabula.com',    // Ganti dengan akun Gmail Anda
      pass: 'rvbn cukj xybg tjzx',        // Ganti dengan App Password
    },
    secure: false,                     // Gunakan TLS
    tls: {
      rejectUnauthorized: false
    }
  });
  
 
  const mailOptions = {
    from: 'vinnymarande@gmail.com',    // Ganti dengan akun Gmail Anda
    to: email,                       // Penerima email (pastikan ini terisi)
    subject: subject,                // Subjek email
    html: `<p>Dear <strong>${name}</strong></p><p>Thank you for joining with us, <em>it's a very pleasure to have you.</em></p>`                    // Isi pesan email
  };

  try {
    // Mengirim email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'Email sent: ' + info.response });
  } catch (error) {
    res.status(500).send({ success: false, error: error.toString() });
  }
};
