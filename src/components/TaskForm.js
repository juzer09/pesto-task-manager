import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [task, setTask] = useState({ title: '', description: '', status: 'To Do' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask({ title: '', description: '', status: 'To Do' });
    };

    return (
        <div className="max-w-lg mx-auto my-8 p-4 shadow-lg rounded-lg bg-white">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Task Title"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Task Description"
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="status"
                        value={task.status}
                        onChange={(e) => setTask({ ...task, status: e.target.value })}
                    >
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Done</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
