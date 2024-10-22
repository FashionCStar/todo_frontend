# Todo List Application

This is a simple full-stack Todo List application built using React for the frontend and Node.js with Express for the backend. The backend uses an in-memory array to store tasks, and the frontend interacts with it via RESTful API calls.

## Project Structure

todo-app/ ├── backend/ │ ├── server.js # Express server that handles CRUD operations │ └── package.json # Backend dependencies └── frontend/ ├── src/ │ ├── components/ │ │ └── TodoApp.js # React component to manage the Todo list UI │ ├── App.js # Main entry point for React app │ └── index.js # React app entry point ├── public/ ├── package.json # Frontend dependencies └── README.md # This file


## Running the Application

### 1. Backend Setup
- Navigate to the `backend/` folder:
  ```bash
  cd backend

npm install

node server.js

The backend server will run at http://localhost:5000.

