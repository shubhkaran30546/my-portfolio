// App.js
import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import './App.css';

function App() {
  return (
    <div className="main-content">
      <Navbar title="Home" className="navbar" />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div></div>
    </div>
  );
}

export default App;
