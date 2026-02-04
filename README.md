$ -- Complete API documentation is available here:

https://documenter.getpostman.com/view/51800509/2sBXc7MQEf

# --- Auth System Backend (Node.js + Express + MongoDB)

This is the backend for the Authentication System built using:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Email based Password Reset

---

## ---Features

- User Registration
- User Login with JWT
- Forgot Password (Email Reset Link)
- Reset Password using Token
- Protected Routes
- Get Logged-in User Profile
- JWT Middleware
- Secure Password Hashing (bcrypt)

API Endpoints

| Method | Endpoint                        | Description                    |
| ------ | ------------------------------- | ------------------------------ |
| POST   | /api/auth/register              | Register new user              |
| POST   | /api/auth/login                 | Login user                     |
| POST   | /api/auth/forgot-password       | Send reset link                |
| POST   | /api/auth/reset-password/:token | Reset password                 |
| GET    | /api/auth/profile               | Get logged-in user (Protected) |

Project Status

-- Fully working authentication system
-- Password reset via email
-- JWT based protected routes
-- Production ready backend logic
