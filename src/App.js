import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import SpaceImage from './Space.png'

function App() {
  return (
    <div className='gradient'>
      <Parallax pages={6} style={{ backgroundImage: `url(${SpaceImage})` }}>
        <ParallaxLayer
          offset={0}
          style={{ backgroundImage: "linear-gradient(#23425C, #2e8b57)" , backgroundSize: 'cover', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Home />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        >
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ backgroundImage: "linear-gradient(#23425C, #2e8b57)" , backgroundSize: 'cover', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        >
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          style={{ backgroundImage: "linear-gradient(#23425C, #2e8b57)", backgroundSize: 'cover', color: 'white',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Blog />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

