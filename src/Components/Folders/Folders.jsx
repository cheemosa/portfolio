import React, { useState } from "react";
import folderIcon from "../../assets/images/FolderImages/folder.png";
import resumeIcon from "../../assets/images/FolderImages/resume.png";
import "../Folders/Folders.css";
import About from "./About/About";
import Project from "./Project/Project";
import questionMark from "../../assets/images/FolderImages/questionMark.png";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import mail from "../../assets/images/FolderImages/mail.png";
import tetris from "../../assets/images/FolderImages/tetris-logo.png";
import { useGlobalContext } from "../../Context";
import Resume from "./Resume/Resume";

const Folders = () => {
  const {
    about,
    setAbout,
    project,
    setProject,
    skills,
    setSkills,
    contact,
    setContact,
    resume,
    setResume,
  } = useGlobalContext();
  return (
    <div className="folder">
      <div className="folder-container">
        <About />
        <img
          src={questionMark}
          alt=""
          id="about"
          onDoubleClick={() => {
            setAbout(!about);
          }}
        />
        <p>About</p>
      </div>
      <div className="folder-container">
        <Project />
        <img
          src={folderIcon}
          alt=""
          onDoubleClick={() => {
            setProject(!project);
          }}
        />
        <p>Project</p>
      </div>
      <div className="folder-container">
        <Skills />
        <img src={folderIcon} alt="" onDoubleClick={() => setSkills(!skills)} />
        <p>Skills</p>
      </div>
      <div className="folder-container">
        <Contact />
        <img
          src={mail}
          alt=""
          onDoubleClick={() => {
            setContact(!contact);
          }}
        />
        <p>Contact</p>
      </div>
      <div className="folder-container">
        <Resume />
        <img src={resumeIcon} alt="" onDoubleClick={() => setResume(!resume)} />
        <p>Resume.pdf</p>
      </div>
      <div className="folder-container">
        <img
          src={tetris}
          alt=""
          onDoubleClick={() => {
            window.location.href = "https://tetris-alo06.vercel.app/";
          }}
        />
        <p>Tetris</p>
      </div>
    </div>
  );
};

export default Folders;
