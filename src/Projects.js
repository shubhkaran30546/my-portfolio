import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'QR Code Event Check-In',
      description: 'Android app for event check-ins via QR code.',
      imgSrc: '/app.jpg',
      link: 'https://github.com/qr-check-in/qr-check-in-app'
    },
    {
      title: 'Cardify',
      description: 'Platform for digital business cards with portfolio integration.',
      imgSrc: '/logo1.png',
      link: 'https://github.com/shubhkaran30546/cardify'
    },
    {
      title: 'CodeTweet',
      description: 'Secure command line project using Python and SQLite.',
      imgSrc: '/codetweet.png',
      link: 'https://github.com/shubhkaran30546/CodeTweet-SQL-Backed-Command-Line-Interface'
    },
    {
      title: 'FEELFLOW',
      description: 'Emotion regulation app built for a NeuroTech Hackathon.',
      imgSrc: '/feelflow.png',
      link: 'https://github.com/vishwa702/classy-fire'
    },
    {
      title: 'SPARK',
      description: 'Online computer store with order management features.',
      imgSrc: '/spark.png',
      link: 'hhttps://github.com/shubhkaran30546/spark'
    }
  ];

  return (
    <div className="projects-section anim" id="project">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img
              src={process.env.PUBLIC_URL + project.imgSrc}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
