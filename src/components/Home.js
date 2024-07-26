// src/components/Home.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './Home.css';

const Home = () => (
  <Container id="home" sx={{ textAlign: 'center', padding: '20px' }}>
    <Box component="header" sx={{ backgroundColor: '#282c34', color: 'white', padding: '20px 0' }}>
      <Typography variant="h1" component="h1">Karl Matthew Baldwin</Typography>
      <Typography variant="subtitle1">Software Developer and Network Engineer</Typography>
    </Box>
    <Box component="main">
      <Box sx={{ margin: '20px 0' }}>
        <Typography variant="h2">Welcome</Typography>
        <Typography variant="body1">
          I'm a passionate software developer with a strong background in problem solving and creating innovative solutions. Explore my portfolio to see my projects and learn more about my skills.
        </Typography>
      </Box>
    </Box>
  </Container>
);

export default Home;
