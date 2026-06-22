Mini Trello — MERN Stack Task Management Application

A full-stack task management application inspired by Trello, built using the MERN Stack with a clean 3-tier enterprise architecture.

The application provides a Kanban-style task board where users can create, update, delete, and manage tasks based on status and priority.

🚀 Tech Stack
Frontend
React.js
Axios
CSS
Backend
Node.js
Express.js
Mongoose
Database
MongoDB
DevOps
Docker
Docker Compose
Container Networking
🏗️ Application Architecture

The application follows a layered enterprise architecture:

                 Client
                   |
                   ↓
          React Presentation Layer
              (frontend)
                   |
                   ↓
          Express REST API Layer
              (backend)
                   |
                   ↓
          Business Logic Layer
        (controllers + services)
                   |
                   ↓
          Data Access Layer
          (Mongoose Models)
                   |
                   ↓
               MongoDB
Request Flow
Route
  ↓
Controller
  ↓
Service
  ↓
Model
  ↓
MongoDB
📂 Project Structure
mern-task-manager/

│
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
│   ├── Dockerfile
│   ├── app.js
│   ├── server.js
│   └── package.json
│
│
├── frontend/
│
│   ├── src/
│   │
│   │   ├── components/
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── taskService.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── Dockerfile
│   └── package.json
│
│
└── docker-compose.yml
✨ Features
Create tasks
View tasks
Update tasks
Delete tasks
Kanban-style dashboard
Task filtering
Status management
Priority management
Due date tracking
Dockerized deployment
📋 Task Model
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
🔌 REST API Documentation

Base URL:

http://localhost:5000
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create new task
GET	/tasks/:id	Get task by ID
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task
Filtering Tasks

Filter by status:

GET /tasks?status=TODO

Filter by priority:

GET /tasks?priority=HIGH
🐳 Docker Deployment

The complete application runs using Docker Compose:

Services:

Frontend
    |
    |
Backend
    |
    |
MongoDB
Dockerfile — Backend

backend/Dockerfile

FROM node:18.9.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
Dockerfile — Frontend

frontend/Dockerfile

FROM node:18.9.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
Docker Compose Configuration

docker-compose.yml

services:

  frontend:

    build: ./frontend

    ports:
      - "3000:3000"

    networks:
      - network


  backend:

    build: ./backend

    ports:
      - "5000:5000"

    environment:

      PORT: 5000

      MONGO_URI: mongodb://mongo:27017/mini-trello

    networks:
      - network

    depends_on:
      - mongo



  mongo:

    image: mongo:latest

    ports:
      - "27017:27017"

    networks:
      - network

    volumes:
      - mongo-data:/data/db



networks:

  network:

    driver: bridge



volumes:

  mongo-data:

    driver: local
⚙️ Running Locally
Clone Repository
git clone <repository-url>

cd mern-task-manager
Run with Docker Compose

Build containers:

docker compose build

Start application:

docker compose up

Run in background:

docker compose up -d
Application URLs

Frontend:

http://localhost:3000

Backend API:

http://localhost:5000

MongoDB:

mongodb://localhost:27017
Verify Containers

Check running containers:

docker ps

Expected:

frontend
backend
mongo
Stop Application
docker compose down

Remove volumes:

docker compose down -v
Environment Configuration

Backend .env

PORT=5000

MONGO_URI=mongodb://mongo:27017/mini-trello
Development Setup Without Docker
Backend
cd backend

npm install

npm run dev

Runs:

http://localhost:5000
Frontend
cd frontend

npm install

npm start

Runs:

http://localhost:3000
Future Enhancements
JWT Authentication
User Management
Task Assignment
Drag and Drop Kanban
Role Based Access Control
Real-time Updates using Socket.io
