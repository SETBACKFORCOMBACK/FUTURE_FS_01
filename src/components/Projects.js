import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-status completed">{project.status}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                🔗 Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

