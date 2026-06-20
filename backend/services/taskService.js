const Task = require("../models/taskModel");

const getTasks = async (filters) => {

    const query = {};

    if (filters.status) {
        query.status = filters.status;
    }

    if (filters.priority) {
        query.priority = filters.priority;
    }

    return await Task.find(query).sort({ createdAt: -1 });

};

const getTaskById = async (id) => {

    return await Task.findById(id);

};

const createTask = async (taskData) => {

    const task = new Task(taskData);

    return await task.save();

};

const updateTask = async (id, taskData) => {

    return await Task.findByIdAndUpdate(id, taskData, {
        new: true,
        runValidators: true
    });

};

const deleteTask = async (id) => {

    return await Task.findByIdAndDelete(id);

};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
