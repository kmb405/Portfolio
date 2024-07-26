// src/components/Projects.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import './Projects.css';

const projects = [
  {
    title: 'Grocery Guru',
    description: 'Grocery Guru is an app that takes a user\'s list of grocery items and searches the internet for the lowest prices, considering ads and websites. It returns a list of items with the lowest prices and locations within a specified radius to minimize travel distance.'
  },
  {
    title: 'My Family Connect App',
    description: 'My Family Connect App is designed to help families stay connected and organized. It includes features for shared calendars, task lists, and messaging to keep everyone on the same page.'
  },
  {
    title: 'Crusty\'s Pizza',
    description: 'Crusty\'s Pizza is an online ordering system for a local pizza restaurant. It allows customers to customize their orders, choose delivery or pickup options, and track their orders in real-time.'
  }
];

const Projects = () => (
  <Container id="projects" sx={{ padding: '20px' }}>
    <Typography variant="h2" component="h2" gutterBottom>Projects</Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '300px' }}>
            <CardContent>
              <Typography variant="h5" component="div">{project.title}</Typography>
              <Typography variant="body1">{project.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;

