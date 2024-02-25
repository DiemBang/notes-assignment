# Document Management System

This project is a school assignment in the course API Development, aimed at implementing a comprehensive solution for managing documents.

## Tech stack
- **Frontend:** HTML5, CSS, JavaScript
- **Backend:** Express.js
- **Database:** MySQL
- **Text Editor:** WYSIWYG TinyMCE

## Project Overview
The Document Management System allows users to create, edit, view, and delete documents efficiently. It consists of two main components:

**Backend:** Built with Express.js, the backend handles API routes, database interactions, and user authentication. Documents are stored in a MySQL database.

**Frontend:** The frontend interface, developed using HTML, CSS, and JavaScript, provides users with an intuitive platform to interact with the document management system. WYSIWYG TinyMCE editor is integrated for rich text editing capabilities.

## Project Structure

The project is organized into two main folders:

**backend:** Contains the backend implementation with Express.js.

**frontend:** Includes the frontend implementation with HTML, CSS, and JavaScript.

## Installation and Setup
To run the Document Management System locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the backend folder and install backend dependencies using `npm install`.
3. Set up your MySQL database and configure the connection in `backend/lib/conn.js`.
4. Run the backend server using `npm start`.
5. Navigate to the frontend folder and open index.html with VS Code's extension Live Server.

## Usage
Once the application is running, you can:

- Register and log in to your account.
- Create, view, edit, and delete documents.
- Utilize the WYSIWYG TinyMCE editor for rich text formatting.
- Manage documents efficiently with a user-friendly interface.

## Limitations

**User Security and Request Validation:** The system currently lacks validation on requests, allowing users to access and modify documents by specifying their user ID in the request. Implementing request validation mechanisms will be essential to ensure that users can only interact with their own documents. This can be done with authentication token. 


