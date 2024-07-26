// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import './Footer.css';

const Footer = () => (
  <Box component="footer" sx={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
        <Link href="#home" color="inherit">Home</Link>
        <Link href="#about" color="inherit">About</Link>
        <Link href="#projects" color="inherit">Projects</Link>
        <Link href="#skills" color="inherit">Skills</Link>
        <Link href="#blog" color="inherit">Blog</Link>
        <Link href="#contact" color="inherit">Contact</Link>
      </Box>
      <Box sx={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
        <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">LinkedIn</Link>
        <Link href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">GitHub</Link>
        <Link href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">Twitter</Link>
      </Box>
      <Typography variant="body2">&copy; 2024 Karl Matthew Baldwin. All rights reserved.</Typography>
    </Container>
  </Box>
);

export default Footer;
