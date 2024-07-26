// src/components/SocialMedia.js
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Typography, Box } from '@mui/material';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <Box className="social-media-container" sx={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        Connect with me on:
      </Typography>
      <Box className="social-media" sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </Box>
    </Box>
  );
};

export default SocialMedia;
