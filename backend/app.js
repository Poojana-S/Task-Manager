const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", taskRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Mini Trello Task Management API is running" });
});

app.use(errorHandler);

module.exports = app;
