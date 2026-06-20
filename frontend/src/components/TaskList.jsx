import React from "react";
import TaskCard from "./TaskCard";

const columns = [
    { key: "TODO", label: "To Do" },
    { key: "IN_PROGRESS", label: "In Progress" },
    { key: "COMPLETED", label: "Completed" }
];

const TaskList = ({ tasks, onEdit, onDelete }) => {

    return (
        <div className="task-board">

            {columns.map((column) => {

                const columnTasks = tasks.filter((task) => task.status === column.key);

                return (
                    <div className="task-column" key={column.key}>

                        <div className="task-column-header">
                            <span>{column.label}</span>
                            <span className="task-column-count">{columnTasks.length}</span>
                        </div>

                        <div className="task-column-body">

                            {columnTasks.length === 0 && (
                                <p className="task-column-empty">No tasks here yet</p>
                            )}

                            {columnTasks.map((task) => (
                                <TaskCard
                                    key={task._id}
                                    task={task}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            ))}

                        </div>

                    </div>
                );

            })}

        </div>
    );

};

export default TaskList;
