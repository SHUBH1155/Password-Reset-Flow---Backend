$ -- Production-ready authentication backend with secure password reset using Brevo Transactional Email API.

$ -- Complete API documentation is available here:

https://documenter.getpostman.com/view/51800509/2sBXc7MQEf

# --- Auth System Backend (Node.js + Express + MongoDB)

This is the backend for the Authentication System built using:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Brevo Transactional Email API
- bcrypt for password hashing

---

## ---Features

- User Registration
- User Login with JWT
- Forgot Password (Email Reset Link via Brevo API)
- Reset Password using Secure Token
- Token Expiry (15 minutes)
- Protected Routes
- Get Logged-in User Profile
- Secure Password Hashing
- Production Deployment on Render

$ -- Email System:
- Integrated with Brevo Transactional Email API
- SMTP removed to avoid timeouts on cloud platforms
- Email delivery verified (Sent, Delivered, Opened, Clicked)

API Endpoints

| Method | Endpoint                          | Description                  ||   POST      /api/auth/register                  Register new user  
POST      /api/auth/login                     Login user  
POST      /api/auth/forgot-password           Send reset link via email  
POST      /api/auth/reset-password/:token     Reset password using token  
GET       /api/auth/profile                   Get logged-in user (Protected)

$ -- Authentication & Security

- JWT based authentication
- Encrypted password storage using bcrypt
- Secure password reset flow using email token
- Protected API routes

Project Status

-- Fully working authentication system
-- Password reset via email (Brevo API)
-- JWT based protected routes
-- Production-ready backend logic
-- Successfully deployed on Render
