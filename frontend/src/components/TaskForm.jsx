import React, { useState, useEffect } from "react";

const emptyTask = {
    title: "",
    description: "",
    status: "TODO",
    priority: "MEDIUM",
    dueDate: ""
};

const TaskForm = ({ editingTask, onSubmit, onCancel }) => {

    const [formData, setFormData] = useState(emptyTask);

    useEffect(() => {

        if (editingTask) {

            setFormData({
                title: editingTask.title || "",
                description: editingTask.description || "",
                status: editingTask.status || "TODO",
                priority: editingTask.priority || "MEDIUM",
                dueDate: editingTask.dueDate ? editingTask.dueDate.substring(0, 10) : ""
            });

        } else {

            setFormData(emptyTask);

        }

    }, [editingTask]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!formData.title.trim()) {
            return;
        }

        onSubmit(formData);

        setFormData(emptyTask);

    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <h3 className="task-form-heading">
                {editingTask ? "Edit Task" : "Add a New Task"}
            </h3>

            <input
                type="text"
                name="title"
                placeholder="Task title"
                value={formData.title}
                onChange={handleChange}
                className="task-form-input"
                required
            />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="task-form-textarea"
                rows={2}
            />

            <div className="task-form-row">

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="task-form-select"
                >
                    <option value="TODO">TODO</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                </select>

                <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="task-form-select"
                >
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>

                <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="task-form-date"
                />

            </div>

            <div className="task-form-actions">

                <button type="submit" className="task-btn task-btn-primary">
                    {editingTask ? "Save Changes" : "Add Task"}
                </button>

                {editingTask && (
                    <button
                        type="button"
                        className="task-btn task-btn-secondary"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                )}

            </div>

        </form>
    );

};

export default TaskForm;
