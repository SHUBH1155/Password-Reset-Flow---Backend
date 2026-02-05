const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Shubham Projects" <shubhamchauhan0114@gmail.com>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent via Brevo to:", to);
  } catch (error) {
    console.error("❌ Email error:", error.message);
    throw error;
  }
};

module.exports = sendEmail;
