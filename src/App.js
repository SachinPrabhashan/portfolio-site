import './App.css';
import './components/skills.css';
import Hero from './components/hero';
import React from 'react';
import Skills from './components/skills';


function App() {
  return (
    <div className="container">
      <Hero />
      <div className='skillsetsection'>
      <Skills />

      </div>
    </div>
  );
}

export default App;
