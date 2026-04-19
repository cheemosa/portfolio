import React from "react";

const SingleProject = ({ project }) => {
  const { name, image, details, tech, link, live } = project;

  return (
    <div className="project-card">
      <div className="project-top-bar"></div>
      {image && (
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
      )}
      {!image && (
        <div className="project-image-placeholder">
          🚧 Screenshot coming soon
        </div>
      )}
      <div className="project-details">
        <h3>{name}</h3>
        <p>{details}</p>
        <p>
          <strong>Tech Stack:</strong> {tech}
        </p>
        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {live ? (
            <a href={live} target="_blank" rel="noreferrer">
              Live Page
            </a>
          ) : (
            <span style={{ color: "#999", fontSize: "13px" }}>
              Live — coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
