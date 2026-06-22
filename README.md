# Mini Trello — MERN Stack Task Management Application

A 3-tier task management application built using the **MERN Stack**:

* **MongoDB** — Database layer
* **Express.js** — Backend API framework
* **React.js** — Frontend UI
* **Node.js** — Server runtime

The application follows a clean enterprise-style architecture with separation of concerns between presentation, business logic, and data access layers.

---

## 🏗️ Architecture

```
Presentation Layer
        ↓
React (frontend/)

Business Logic Layer
        ↓
Node.js + Express
(backend/controllers + backend/services)

Data Access Layer
        ↓
MongoDB + Mongoose
(backend/models)
```

### Request Flow

```
Route → Controller → Service → Model → MongoDB
```

---

# 📂 Project Structure

```
mern-task-manager/

├── backend/
│
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── models/
│   │   └── taskModel.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   ├── .env
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── frontend/

    ├── public/
    │   └── index.html
    │
    ├── src/
    │
    │   ├── components/
    │   │   ├── TaskCard.jsx
    │   │   ├── TaskForm.jsx
    │   │   └── TaskList.jsx
    │   │
    │   ├── pages/
    │   │   └── Dashboard.jsx
    │   │
    │   ├── services/
    │   │   └── taskService.js
    │   │
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    │
    └── package.json
```

---

# 🔌 API Routes

Base URL:

```
http://localhost:5000
```

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| POST   | `/tasks`     | Create a new task |
| GET    | `/tasks/:id` | Get task by ID    |
| PUT    | `/tasks/:id` | Update task       |
| DELETE | `/tasks/:id` | Delete task       |

### Query Filters

Tasks can be filtered using:

```
GET /tasks?status=TODO
GET /tasks?priority=HIGH
```

---

# 📋 Task Schema

```javascript
{
    title: String,

    description: String,

    status:
    "TODO" |
    "IN_PROGRESS" |
    "COMPLETED",

    priority:
    "LOW" |
    "MEDIUM" |
    "HIGH",

    dueDate: Date,

    createdAt: Date
}
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone <repository-url>

cd mern-task-manager
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create/update `.env`:

```
PORT=5000

MONGO_URI=mongodb://localhost:27017/mini_trello
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running the Application

## Start Backend

Runs on:

```
http://localhost:5000
```

Command:

```bash
cd backend

npm run dev
```

or:

```bash
npm start
```

---

## Start Frontend

Runs on:

```
http://localhost:3000
```

Command:

```bash
cd frontend

npm start
```

The React application communicates with the backend API running on:

```
http://localhost:5000
```

---

# 🚀 Features

✅ Create tasks
✅ View tasks
✅ Update tasks
✅ Delete tasks
✅ Kanban-style dashboard

Task columns:

```
TODO
IN_PROGRESS
COMPLETED
```

Additional features:

* Filter tasks by status
* Filter tasks by priority
* Track due dates
* Enterprise-style layered backend architecture

---

# 🐳 Docker Setup

## Create Frontend Docker Image

```bash
docker build -t frontend .
```

Create Docker network:

```bash
docker network create network
```

Run frontend container:

```bash
docker run \
--name=frontend \
--network=network \
-d \
-p 3000:3000 \
frontend
```

Application:

```
http://localhost:3000
```

---

# MongoDB Docker Setup

Pull MongoDB image:

```bash
docker pull mongo:latest
```

Run MongoDB container:

```bash
docker run \
--network=network \
--name mongodb \
-d \
-p 27017:27017 \
-v ~/opt/data:/data/db \
mongo:latest
```

MongoDB will run on:

```
localhost:27017
```

---

# Backend Docker Setup

Build backend image:

```bash
docker build -t backend .
```

Run backend container:

```bash
docker run \
--name=backend \
--network=network \
-d \
-p 5000:5000 \
backend
```

Backend API:

```
http://localhost:5000
```

---

# ✅ Verify Deployment

Check frontend:

```
ping localhost:3000
```

If the React application loads successfully, the deployment is working.

Check MongoDB:

```
ping localhost:27017
```

Check backend:

```
ping localhost:5000
```

---

# 🛠️ Technology Stack

### Frontend

* React.js
* CSS
* Axios

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB

### Deployment

* Docker
* Docker Network

