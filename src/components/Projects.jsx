import React from 'react';

const projects = [
  {
    title: 'ISS Tracker',
    description: 'A real-time International Space Station tracker with live coordinates, a Leaflet map, and a trail of past locations.',
    image: '/images/iss-tracker.png', // put your image in public/images/
    github: 'https://github.com/YOUR_USERNAME/iss-tracker',
    live: 'https://YOUR_DEPLOYED_LINK.vercel.app'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 text-center" id="projects">
      <h2 className="text-4xl font-bold mb-10">🚀 Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 text-left">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 font-medium hover:underline"
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
