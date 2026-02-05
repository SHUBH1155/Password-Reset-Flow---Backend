const axios = require("axios");

const sendEmail = async (to, subject, html) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Shubham App",
          email: "shubhamchauhan0114@gmail.com",
        },
        to: [{ email: to }],
        subject: subject,
        htmlContent: html,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.log("❌ Email failed:", error.response?.data || error.message);
  }
};

module.exports = sendEmail;
