import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">{props.title}</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}