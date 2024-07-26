import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem' }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>
        I am a software developer with a passion for coding and a strong background in network engineering. With experience in Python, Django, Flask, Java, Spring Framework, and more, I have developed a diverse skill set that allows me to build robust and scalable applications. I am also proficient in web development technologies like JavaScript, HTML, and CSS, and have experience with mobile app development using Kotlin and Android Studio. My knowledge extends to automation, network design, cloud services, and various software architectural patterns. I am a team player with strong leadership skills and a commitment to continuous learning and improvement.
      </Typography>
    </Container>
  );
};

export default About;
