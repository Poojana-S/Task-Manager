const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        trim: true,
        default: ""
    },

    status: {
        type: String,
        enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
        default: "TODO"
    },

    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"],
        default: "MEDIUM"
    },

    dueDate: {
        type: Date
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
