$ -- Complete API documentation is available here:

https://documenter.getpostman.com/view/51800509/2sBXc7MQEf

# --- Auth System Backend (Node.js + Express + MongoDB)

This is the backend for the Authentication System built using:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Email based Password Reset (Brevo API)

---

## ---Features

- User Registration
- User Login with JWT
- Forgot Password (Email Reset Link via Brevo API)
- Reset Password using Token
- Protected Routes
- Get Logged-in User Profile
- JWT Middleware
- Secure Password Hashing (bcrypt)
- Production-ready backend logic

API Endpoints

| Method | Endpoint                        | Description                    |
| ------ | ------------------------------- | ------------------------------ |
| POST   | /api/auth/register              | Register new user              |
| POST   | /api/auth/login                 | Login user                     |
| POST   | /api/auth/forgot-password       | Send reset link                |
| POST   | /api/auth/reset-password/:token | Reset password                 |
| GET    | /api/auth/profile               | Get logged-in user (Protected) |

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
