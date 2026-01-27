# Video Management Engine
A production-ready, scalable backend architecture built with the Node.js ecosystem. 
This project demonstrates industry-standard practices for API design, security, and media management.

Key Features:

Secure Authentication: Comprehensive user flow using JWT (JSON Web Tokens), access/refresh tokens, and Bcrypt for password encryption.

Media Management: Seamless image and video uploads integrated with Cloudinary via Multer middleware.

Database : Complex data modeling and high-performance queries using MongoDB and Mongoose Aggregation Pipelines.

Security: Implementation of CORS, secure HTTP-only cookies, and centralized error handling.

Clean Architecture: Follows the MVC (Model-View-Controller) pattern for maximum maintainability and scalability.

Runtime & Framework - Node.js, Express.js
Database - MongoDB, Mongoose
Authentication	- JWT, Bcrypt.js, Cookie-parser
File Handling	- Multer, Cloudinary SDK
Environment	- Dotenv, Git


src/
├── controllers/    # Request handling & business logic
├── models/         # Mongoose schemas & data validation
├── routes/         # API endpoint definitions
├── middlewares/    # Auth, Multer, and Error handling
├── db/             # Database connection logic
├── utils/          # API errors, responses, and Cloudinary config
└── app.js          # Express app configuration



