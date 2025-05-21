# **Task Management Backend API**

This is the **backend** for a Task Management Web Application, built with **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API to create, read, update, delete tasks.

---

## **📁 Folder Structure**

```
backend/
├── controllers/
│   └── taskController.js    # Handles business logic for tasks
├── models/
│   └── Task.js              # Mongoose schema/model for a Task
├── routes/
│   └── tasks.js             # Defines routes/endpoints for task operations
├── server.js                # Initializes the Express server and connects to MongoDB
├── .env                     # Environment variables (e.g., PORT, MONGO_URI)
├── package.json             # Project metadata and dependencies
└── package-lock.json        # Dependency lock file
```

---

## **⚙️ Setup Instructions**

Follow these steps to run the backend locally:

### **1. Clone the repository**

```bash
git clone https://github.com/HamzaSohail-10/task-manager-backend.git
cd task-manager-backend
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Set up environment variables**

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., from MongoDB Atlas or your local MongoDB instance).

### **4. Run the development server**

```bash
npm start
```

This uses `nodemon` for auto-restarting the server on file changes. If `nodemon` is not installed globally, install it using:

```bash
npm install -g nodemon
```

### **5. API Base URL**

```
http://localhost:5000/api/tasks
```

---

## **🧠 Logic Overview**

- **server.js**: Entry point. Sets up Express, middleware, and connects to MongoDB.
- **models/Task.js**: Defines the structure of a task using Mongoose schema (e.g., title, description, status, dueDate).
- **controllers/taskController.js**: Contains controller functions for handling task operations like create, read, update, delete, filter.
- **routes/tasks.js**: Maps HTTP routes to controller functions.

---

## **📬 API Endpoints**

| Method | Route                | Description             |
|--------|----------------------|-------------------------|
| GET    | /api/tasks           | Get all tasks           |
| POST   | /api/tasks           | Create a new task       |
| PUT    | /api/tasks/:id       | Update a task           |
| DELETE | /api/tasks/:id       | Delete a task           |

---

## **📌 Notes**

- Make sure MongoDB is running locally or use MongoDB Atlas for cloud-hosted DB.
- This backend can be connected to a React frontend for a complete full-stack Task Manager application.

---
