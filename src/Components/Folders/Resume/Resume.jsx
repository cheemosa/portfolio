import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import { useGlobalContext } from "../../../Context";
import "./Resume.css";

const Resume = () => {
  const { resume, setResume } = useGlobalContext();

  return (
    <div className={resume ? "resume" : "close"}>
      <TitleBar title="Resume.pdf" onToggle={() => setResume(false)} />
      <div className="resume-content">
        <iframe
          src="/Jeevottam_Bhat_Resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Resume;
