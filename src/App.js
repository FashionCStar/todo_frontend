import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TodoApp from './components/TodoApp';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './context/AuthContext';
import TodoProvider from './context/TodoContext';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navigation Bar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/todo">
              Todo List
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Toolbar>
        </AppBar>

        <Container style={{ marginTop: '20px' }}>
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/todo"
              element={
                <TodoProvider>
                  <PrivateRoute>
                    <TodoApp />
                  </PrivateRoute>
                </TodoProvider>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
