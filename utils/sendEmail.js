const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Password Reset" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent via Brevo:", to);
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
};

module.exports = sendEmail;
