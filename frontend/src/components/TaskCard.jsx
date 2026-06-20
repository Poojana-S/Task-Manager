import React from "react";

const priorityColors = {
    LOW: "#4caf91",
    MEDIUM: "#e0a83c",
    HIGH: "#e0563c"
};

const formatDate = (dateString) => {

    if (!dateString) {
        return "No due date";
    }

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

};

const TaskCard = ({ task, onEdit, onDelete }) => {

    return (
        <div className="task-card">

            <div
                className="task-card-priority"
                style={{ backgroundColor: priorityColors[task.priority] || "#999" }}
            >
                {task.priority}
            </div>

            <h4 className="task-card-title">{task.title}</h4>

            {task.description && (
                <p className="task-card-description">{task.description}</p>
            )}

            <div className="task-card-footer">
                <span className="task-card-date">{formatDate(task.dueDate)}</span>
            </div>

            <div className="task-card-actions">
                <button className="task-btn task-btn-edit" onClick={() => onEdit(task)}>
                    Edit
                </button>
                <button className="task-btn task-btn-delete" onClick={() => onDelete(task._id)}>
                    Delete
                </button>
            </div>

        </div>
    );

};

export default TaskCard;
