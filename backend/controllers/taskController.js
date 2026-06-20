const taskService = require("../services/taskService");

const getTasks = async (req, res, next) => {

    try {

        const { status, priority } = req.query;

        const tasks = await taskService.getTasks({ status, priority });

        res.status(200).json(tasks);

    } catch (error) {

        next(error);

    }

};

const getTaskById = async (req, res, next) => {

    try {

        const task = await taskService.getTaskById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(task);

    } catch (error) {

        next(error);

    }

};

const createTask = async (req, res, next) => {

    try {

        const { title, description, status, priority, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const task = await taskService.createTask({
            title,
            description,
            status,
            priority,
            dueDate
        });

        res.status(201).json(task);

    } catch (error) {

        next(error);

    }

};

const updateTask = async (req, res, next) => {

    try {

        const { title, description, status, priority, dueDate } = req.body;

        const updatedTask = await taskService.updateTask(req.params.id, {
            title,
            description,
            status,
            priority,
            dueDate
        });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);

    } catch (error) {

        next(error);

    }

};

const deleteTask = async (req, res, next) => {

    try {

        const deletedTask = await taskService.deleteTask(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });

    } catch (error) {

        next(error);

    }

};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
