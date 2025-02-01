Course Management App
A simple MERN (MongoDB, Express, React, Node.js) Course Management Application where users can register, log in, and manage courses.

Features
User authentication (Register/Login)
Add, edit, and delete courses
Display courses in a grid layout
Protected routes using JWT authentication
Technologies Used
Frontend: React, React Router, Axios, CSS
Backend: Node.js, Express, MongoDB, Mongoose, JWT
Project Structure
Frontend (React) Components
Home.js - Displays the welcome page with login and register options.
Login.js - Allows users to log in and stores authentication tokens.
Register.js - Handles user registration.
CourseForm.js - A form to create a new course.
CourseList.js - Fetches and displays the list of available courses.
EditCourse.js - Allows users to edit an existing course.
ProtectedRoute.js - Restricts access to authenticated users.
Backend (Express) Controllers
authController.js

register - Registers a new user.
login - Authenticates a user and returns a token.
courseController.js

createCourse - Adds a new course to the database.
getCourses - Retrieves all courses.
updateCourse - Updates an existing course.
deleteCourse - Removes a course from the database.
Backend Routes
Auth Routes (/api/auth)

POST /register - Registers a user.
POST /login - Logs in a user.
Course Routes (/api/courses)

GET / - Fetches all courses.
POST / - Creates a new course.
PUT /:id - Updates an existing course.
DELETE /:id - Deletes a course.
