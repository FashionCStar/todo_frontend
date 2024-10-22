import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Container,
  Typography,
  Paper,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoApp = () => {
  const { tasks, loading, addTask, deleteTask, toggleComplete } = useContext(TodoContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Todo List
        </Typography>

        <TextField
          fullWidth
          label="Add a new task"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? handleAddTask() : null)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddTask}
          style={{ marginTop: '10px' }}
        >
          Add Task
        </Button>

        {loading ? (
          <CircularProgress style={{ display: 'block', margin: '20px auto' }} />
        ) : (
          <List style={{ marginTop: '20px' }}>
            {tasks.map((task) => (
              <ListItem key={task._id} dense>
                <Checkbox
                  checked={task.isCompleted}
                  onChange={() => toggleComplete(task._id, task.isCompleted)}
                />
                <ListItemText
                  primary={task.name}
                  style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
                />
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task._id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default TodoApp;
