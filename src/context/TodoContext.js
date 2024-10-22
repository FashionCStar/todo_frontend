import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const { token } = useContext(AuthContext);  // Get the token from AuthContext
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks when the component mounts
  useEffect(() => {
    if (token) {
      setLoading(true);
      axios
        .get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setTasks(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
          setLoading(false);
        });
    }
  }, [token]);

  // Add a new task
  const addTask = (taskName) => {
    if (taskName.trim() === '') return;
    axios
      .post(
        'http://localhost:5000/api/tasks',
        { name: taskName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error adding task:', error));
  };

  // Delete a task
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Toggle task completion
  const toggleComplete = (id, isCompleted) => {
    axios
      .put(
        `http://localhost:5000/api/tasks/${id}`,
        { isCompleted: !isCompleted },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  return (
    <TodoContext.Provider value={{ tasks, loading, addTask, deleteTask, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
