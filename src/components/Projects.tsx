// src/components/Projects.tsx
import React from 'react';
import './Projects.css';

const projects = [
  { title: 'Project 1', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio, provident.', tech: 'JavaScript React Sass' },
  { title: 'Project 2', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio, provident.', tech: 'JavaScript React Sass' },
  { title: 'Project 3', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio, provident.', tech: 'JavaScript React Sass' },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;