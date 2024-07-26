import React from 'react';
import { Container, Typography } from '@mui/material';

const Skills = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem' }}>
        Skills
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>
        I am a versatile software developer with a strong foundation in Python, utilizing frameworks such as Flask and Django to build robust applications. My web development expertise extends to JavaScript, HTML, and CSS, enabling me to create dynamic and responsive user interfaces. Additionally, I have experience with Java and the Spring Framework, enhancing my ability to develop scalable backend systems. My skills include mobile app development using Kotlin and Android Studio, as well as game development with C++ and Unreal Engine. I am proficient in various software architectural patterns, including MVC, MVVM, and MVP. My technical repertoire also encompasses automation with Ansible, network engineering, and cloud services like Azure and AWS. Furthermore, I am adept at team collaboration and leadership, contributing to network design and management, Microsoft server management, and VMware ESXi environments. My comprehensive skill set is complemented by certifications in ITIL v4 Foundation, Cisco CCNP Enterprise, Juniper JNCIA ENT, MIST, Juniper JNCIS ENT, CompTIA Security+, CompTIA Project+, AWS Cloud Practitioner, AWS SysOps, Python Scripting, and Linux Essentials.
      </Typography>
    </Container>
  );
};

export default Skills;
