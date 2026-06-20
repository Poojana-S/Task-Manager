import React, { useState, useEffect, useCallback } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import taskService from "../services/taskService";

const Dashboard = () => {

    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadTasks = useCallback(async () => {

        try {

            setLoading(true);

            const filters = {};

            if (statusFilter) {
                filters.status = statusFilter;
            }

            if (priorityFilter) {
                filters.priority = priorityFilter;
            }

            const data = await taskService.getTasks(filters);

            setTasks(data);
            setError("");

        } catch (err) {

            setError("Could not load tasks. Is the backend server running?");

        } finally {

            setLoading(false);

        }

    }, [statusFilter, priorityFilter]);

    useEffect(() => {

        loadTasks();

    }, [loadTasks]);

    const handleCreateOrUpdate = async (formData) => {

        try {

            if (editingTask) {

                await taskService.updateTask(editingTask._id, formData);
                setEditingTask(null);

            } else {

                await taskService.createTask(formData);

            }

            await loadTasks();

        } catch (err) {

            setError("Something went wrong while saving the task.");

        }

    };

    const handleEdit = (task) => {

        setEditingTask(task);

    };

    const handleCancelEdit = () => {

        setEditingTask(null);

    };

    const handleDelete = async (id) => {

        try {

            await taskService.deleteTask(id);
            await loadTasks();

        } catch (err) {

            setError("Something went wrong while deleting the task.");

        }

    };

    return (
        <div className="dashboard">

            <header className="dashboard-header">
                <h1>Mini Trello</h1>
                <p>A simple task board for your team</p>
            </header>

            {error && <div className="dashboard-error">{error}</div>}

            <div className="dashboard-content">

                <aside className="dashboard-sidebar">

                    <TaskForm
                        editingTask={editingTask}
                        onSubmit={handleCreateOrUpdate}
                        onCancel={handleCancelEdit}
                    />

                    <div className="dashboard-filters">

                        <h3 className="dashboard-filters-heading">Filters</h3>

                        <label className="dashboard-filter-label">
                            Status
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="task-form-select"
                            >
                                <option value="">All</option>
                                <option value="TODO">TODO</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>
                        </label>

                        <label className="dashboard-filter-label">
                            Priority
                            <select
                                value={priorityFilter}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                                className="task-form-select"
                            >
                                <option value="">All</option>
                                <option value="LOW">LOW</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HIGH">HIGH</option>
                            </select>
                        </label>

                    </div>

                </aside>

                <main className="dashboard-main">

                    {loading ? (
                        <p className="dashboard-loading">Loading tasks...</p>
                    ) : (
                        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
                    )}

                </main>

            </div>

        </div>
    );

};

export default Dashboard;
