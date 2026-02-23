# Video Backend Engine

A production-ready, scalable backend architecture built with the Node.js ecosystem. This project demonstrates industry-standard practices for API design, security, and media management.\
[Project Link](khatrikamal.netlify.app)

---

## Tech Stack

| Category | Tools |
| :--- | :--- |
| Runtime & Framework | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, Bcrypt.js, Cookie-parser |
| File Handling | Multer, Cloudinary SDK |
| Environment | Dotenv, Git |

---

## Key Features

* **Secure Authentication:** Comprehensive user flow using JWT (Access/Refresh tokens) and Bcrypt for password encryption.
* **Media Management:** Seamless image and video uploads integrated with Cloudinary via Multer middleware.
* **Advanced Database Logic:** Complex data modeling and high-performance queries using Mongoose Aggregation Pipelines.
* **Security Best Practices:** Implementation of CORS, secure HTTP-only cookies, and centralized error handling classes.
* **Clean Architecture:** Follows the MVC (Model-View-Controller) pattern for maximum maintainability and scalability.

---

## Project Structure

```text
src/
├── db/             # Database connection logic
├── models/         # Mongoose schemas & data validation
├── controllers/    # Request handling & business logic
├── routes/         # API endpoint definitions
├── middlewares/    # Auth, Multer, and Error handling
├── utils/          # API errors, responses, and Cloudinary config
└── app.js          # Express app configuration
