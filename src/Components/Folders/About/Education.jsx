import React from "react";
import "./About.css";

const Education = ({ educationData }) => {
  return (
    <div className="timeline-container">
      {educationData.map((education) => (
        <div key={education.institute} className="timeline-item">
          <div className="timeline-content">
            <h3>{education.institute}</h3>
            <p>{education.duration}</p>
            <p>{education.degree}</p>
            <p>CGPA: {education.cgpa}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
