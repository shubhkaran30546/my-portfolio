import React from 'react';
import './App.css';

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <ul>
        <li><a href="/my-portfolio">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}
