import React from "react";
import "./Project.css";
import TitleBar from "../TitleBar/TitleBar";
import { projectData } from "../../../data.jsx";
import SingleProject from "./SingleProject";
import { useGlobalContext } from "../../../Context.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const Project = () => {
  const { project, setProject } = useGlobalContext();
  return (
    <div className={project ? "project" : "close"}>
      <TitleBar title="Project" onToggle={() => setProject(!project)} />
      <div className="split">
        <Navigation />
        <div className="project-scroll-area">
          <div className="project-card-container">
            {projectData.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
