import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Todo App
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple Todo List application where you can add, update, and manage your tasks efficiently.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/todo">
        Go to Todo List
      </Button>
    </Container>
  );
};

export default Home;
