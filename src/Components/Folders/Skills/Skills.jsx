import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import "./Skills.css";
import { skillCategories } from "../../../data";
import { useGlobalContext } from "../../../Context";
import Navigation from "../Navigation/Navigation";

const Skills = () => {
  const { skills, setSkills } = useGlobalContext();

  return (
    <div className={skills ? "skills" : "close"}>
      <TitleBar title="Skills" onToggle={() => setSkills(false)} />
      <div className="split">
        <Navigation />
        <div className="skills-scroll-area">
          <div className="skills-container">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="skills-category">
                <h2>{cat.category}</h2>
                <div className="skills-grid">
                  {cat.skills.map((skill, index) => (
                    <div className="skill" key={index}>
                      <img src={skill.icon} alt={skill.name} />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
