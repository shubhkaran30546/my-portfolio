// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar title="Home" className="navbar" />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
