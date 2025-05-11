import React from 'react';
import '../App.css';

const projects = [
  {
    title: 'ISS Tracker',
    description:
      'A real-time International Space Station tracker built with React and Leaflet. Includes live coordinates and animated satellite path.',
    image: '/images/iss-tracker.png',
    github: 'https://github.com/YOUR_USERNAME/iss-tracker',
    live: 'https://YOUR_DEPLOYED_LINK.vercel.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-buttons">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-live"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
