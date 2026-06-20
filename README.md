# Mini Trello — MERN Stack Task Management Application

A 3-tier task management application built with the MERN stack (MongoDB, Express, React, Node.js), following a clean enterprise-style architecture.

## Architecture

```
Presentation Layer   → React (frontend/)
Business Logic Layer → Node.js + Express (backend/controllers, backend/services)
Data Access Layer    → MongoDB + Mongoose (backend/models)
```

Request flow:

```
Route → Controller → Service → Model → MongoDB
```

## Project Structure

```
mern-task-manager/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── services/
│   │   └── taskService.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── .env
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── TaskCard.jsx
    │   │   ├── TaskForm.jsx
    │   │   └── TaskList.jsx
    │   ├── pages/
    │   │   └── Dashboard.jsx
    │   ├── services/
    │   │   └── taskService.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## API Routes (no `/api` prefix)

| Method | Route        | Description              |
|--------|--------------|---------------------------|
| GET    | /tasks       | Get all tasks (supports `?status=` and `?priority=` query filters) |
| POST   | /tasks       | Create a new task          |
| GET    | /tasks/:id   | Get a single task          |
| PUT    | /tasks/:id   | Update a task              |
| DELETE | /tasks/:id   | Delete a task              |

## Task Schema

```js
{
    title: String,
    description: String,
    status: "TODO" | "IN_PROGRESS" | "COMPLETED",
    priority: "LOW" | "MEDIUM" | "HIGH",
    dueDate: Date,
    createdAt: Date
}
```

## Installation

### 1. Backend

```bash
cd backend
npm install
```

Update `.env` with your MongoDB connection string if needed:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mini_trello
```

### 2. Frontend

```bash
cd frontend
npm install
```

## Running the Application

Make sure MongoDB is running locally (or update `MONGO_URI` to point to MongoDB Atlas), then:

### Start the backend (runs on http://localhost:5000)

```bash
cd backend
npm run dev
```

(or `npm start` to run without nodemon)

### Start the frontend (runs on http://localhost:3000)

```bash
cd frontend
npm start
```

The React app talks to the API at `http://localhost:5000`, so make sure the backend is running first.

## Features

- Create, view, update, and delete tasks
- Kanban-style board with TODO / IN_PROGRESS / COMPLETED columns
- Filter tasks by status and priority
- Each task tracks title, description, status, priority, and due date
