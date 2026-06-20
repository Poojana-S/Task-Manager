import axios from "axios";

const BASE_URL = "http://localhost:5000";

const getTasks = async (filters = {}) => {

    const response = await axios.get(`${BASE_URL}/tasks`, { params: filters });

    return response.data;

};

const getTaskById = async (id) => {

    const response = await axios.get(`${BASE_URL}/tasks/${id}`);

    return response.data;

};

const createTask = async (taskData) => {

    const response = await axios.post(`${BASE_URL}/tasks`, taskData);

    return response.data;

};

const updateTask = async (id, taskData) => {

    const response = await axios.put(`${BASE_URL}/tasks/${id}`, taskData);

    return response.data;

};

const deleteTask = async (id) => {

    const response = await axios.delete(`${BASE_URL}/tasks/${id}`);

    return response.data;

};

export default {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
