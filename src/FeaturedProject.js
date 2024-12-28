import React from 'react';

function FeaturedProject({ projects, onProjectHover }) {
  return (
    <div className="right-rectangle">
      {projects.map(project => (
        <div 
          key={project.id}
          className="item" 
          onMouseEnter={() => onProjectHover(project.description)}
          onMouseLeave={() => onProjectHover('Hover over a project to see its description.')}
        >
          <a href={project.href}>
            <img src={project.imgSrc} alt={`Project ${project.id}`} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProject;