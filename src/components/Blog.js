// src/components/Blog.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import './Blog.css';

const posts = [
  {
    title: "Welcome to My Blog",
    date: "July 24, 2024",
    content: "This is the first post on my new blog! Stay tuned for more updates and insights into software development, network engineering, and my personal projects."
  },
  {
    title: "Getting Started with Python Automation",
    date: "July 20, 2024",
    content: "Python is a powerful language for automation. In this post, I'll share some tips and resources for getting started with Python automation, including useful libraries and frameworks."
  },
  {
    title: "Building Responsive Web Applications",
    date: "July 15, 2024",
    content: "In today's world, having a responsive web application is crucial. This post covers the basics of responsive design and how to implement it using CSS frameworks like Bootstrap and Tailwind CSS."
  }
];

const Blog = () => (
  <Container id="blog" sx={{ padding: '20px' }}>
    <Typography variant="h2" component="h2" gutterBottom>Blog</Typography>
    <Grid container spacing={4}>
      {posts.map((post, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '300px' }}>
            <CardContent>
              <Typography variant="h5" component="div">{post.title}</Typography>
              <Typography variant="subtitle2" sx={{ color: '#888', marginBottom: '10px' }}>{post.date}</Typography>
              <Typography variant="body1">{post.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Blog;
