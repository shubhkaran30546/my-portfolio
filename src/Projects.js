// src/Projects.js
import React from 'react';

export default function Projects() {
    const projects = [
        {
          title: 'QR Code Event Check-In',
          description: 'Developed an intuitive Android application for event management, enabling attendees to check in via QR codes.',
          imgSrc: '/app.jpg',
          link: 'https://github.com/qr-check-in/qr-check-in-app'
        },
        {
          title: 'CodeTweet',
          description: 'Developed a collaborative Python project utilizing SQLite for a secure command line interface.'
          ,
          imgSrc: '/codetweet.png',
          link: 'https://github.com/shubhkaran30546/CodeTweet-SQL-Backed-Command-Line-Interface'
        },
        {
          title: 'FEELFLOW',
          description: 'Contributed to NeuroTech Hackathon, creating FeelFlow—an innovative emotion regulation app.',
          imgSrc: '/feelflow.png',
          link: 'https://github.com/vishwa702/classy-fire'
        }
      ];
    
  return (
    <body>
    <h2 className='aboutheader'>My Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + project.imgSrc} alt={project.title} className="project-image" />
            <div className="overlay">
              <div className="text">{project.description}</div>
            </div>
          </a>
          <h3 className="project-title">{project.title}</h3>
        </div>
      ))}
    </div>
    <div className="bottom-line"></div>
    </body>
  );
}