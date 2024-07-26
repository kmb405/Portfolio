// src/components/Contact.js
import React from 'react';
import { Container, Typography, Box, TextField, Button, Link } from '@mui/material';
import './Contact.css';
import Footer from './Footer';
import SocialMedia from './SocialMedia';

const Contact = () => (
  <Container id="contact" sx={{ padding: '20px' }}>
    <Typography variant="h2" component="h2">Contact Me</Typography>
    <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            marginBottom: '20px',
            width: '100%',
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
              '& input': {
                color: 'white',
              },
              '& textarea': {
                color: 'white',
              },
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" type="email" variant="outlined" required />
        <TextField label="Message" variant="outlined" multiline rows={5} required />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </Box>
    <Box sx={{ marginTop: '20px' }}>
      <Typography variant="body1" sx={{  textAlign: 'center', marginTop: '10px' }}>Email: <Link href="mailto:kmb405@live.com">kmb405@live.com</Link></Typography>
      <Typography variant="body1" sx={{  textAlign: 'center', marginTop: '10px' }}>Phone: <Link href="251-508-3276">251-508-3276</Link></Typography>
    </Box>
    <SocialMedia />
    <Footer />
  </Container>

);

export default Contact;
