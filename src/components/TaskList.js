import React from 'react';

function TaskList({ tasks, deleteTask, updateTask }) {
    return (
        <div className="max-w-lg mx-auto my-8">
            {tasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center bg-white p-4 mb-4 shadow rounded">
                    <div>
                        <p className="text-lg font-semibold">{task.title}</p>
                        <p className="text-sm text-gray-600">{task.description}</p>
                    </div>
                    <div>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => updateTask(task.id)}
                        >
                            Update Status
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
