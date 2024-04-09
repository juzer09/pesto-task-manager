import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
	const [tasks, setTasks] = useState([]);

	// Base URL for your API
	const apiBaseURL = 'http://localhost:3000';

	// Fetch tasks from the backend API
	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await axios.get(`${apiBaseURL}/tasks`);
				setTasks(response.data);
			} catch (error) {
				console.error("There was an error fetching the tasks:", error);
			}
		};

		fetchTasks();
	}, []);

	const addTask = async (newTask) => {
		try {
			const response = await axios.post(`${apiBaseURL}/tasks`, newTask);
			// Fetch tasks again to refresh the list, or you could optimistically update the state
			setTasks([...tasks, { ...newTask, id: response.data }]);
		} catch (error) {
			console.error("There was an error adding the task:", error);
		}
	};

	const deleteTask = async (taskId) => {
		try {
			await axios.delete(`${apiBaseURL}/tasks/${taskId}`);
			// Filter out the deleted task, or fetch the list again if you prefer
			const updatedTasks = tasks.filter(task => task.id !== taskId);
			setTasks(updatedTasks);
		} catch (error) {
			console.error("There was an error deleting the task:", error);
		}
	};

	const updateTask = async (taskId, updatedFields) => {
		try {
			await axios.put(`${apiBaseURL}/tasks/${taskId}`, updatedFields);
			// Update task state, or fetch updated list
			const updatedTasks = tasks.map(task => {
				if (task.id === taskId) {
					return { ...task, ...updatedFields };
				}
				return task;
			});
			setTasks(updatedTasks);
		} catch (error) {
			console.error("There was an error updating the task:", error);
		}
	};

	return (
		<div className="App">
			<header className="bg-blue-600 text-white p-6 shadow-md">
				<h1 className="text-center text-2xl">Task Manager</h1>
			</header>
			<main className="container mx-auto px-4">
				<TaskForm addTask={addTask} />
				<TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
			</main>
		</div>
	);
}

export default App;
