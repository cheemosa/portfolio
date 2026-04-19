import React from "react";
import "./About.css";
import pfp from "../../../assets/images/pfp.jpg";
import Education from "./Education";
import { educationData, workData } from "../../../data.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import { useGlobalContext } from "../../../Context.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const About = () => {
  const { about, setAbout } = useGlobalContext();

  return (
    <div className={about ? "about" : "close"}>
      <TitleBar title="About" onToggle={() => setAbout(!about)} />
      <div className="split">
        <Navigation />
        <div className="about-scroll-area">
          <div className="about-content">
            <div className="about-content-para">
              <h2 style={{ color: "#000080", marginBottom: "12px" }}>
                Hi, I'm Jeevottam Bhat 👋
              </h2>
              <p>
                I'm a Software Engineer based in Mangalore, India, currently
                working at <strong>Louisa AI</strong> — an AI startup spun off
                from Goldman Sachs. I work across the full stack, building
                everything from React frontends to Node.js backends and
                distributed systems.
              </p>
              <p style={{ marginTop: "12px" }}>
                Outside of work, I'm deep into building side projects that sit
                at the intersection of AI and backend engineering — like{" "}
                <strong>RecallAI</strong>, an AI-powered spaced repetition app,
                and a <strong>mutual fund tracking system</strong> with LLM
                signals and a Recharts dashboard.
              </p>
              <p style={{ marginTop: "12px" }}>
                Apart from these, I love playing sports, watching football,
                playing video games. And binge watching youtube videos
              </p>

              <h3 style={{ color: "#000080", margin: "20px 0 10px" }}>
                Experience
              </h3>
              <div className="timeline-container">
                {workData.map((w, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-content">
                      <strong>{w.role}</strong> —{" "}
                      <span style={{ color: "#000080" }}>{w.company}</span>
                      <p style={{ fontSize: "13px", margin: "2px 0" }}>
                        {w.duration}
                      </p>
                      <p style={{ fontSize: "14px", marginTop: "6px" }}>
                        {w.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ color: "#000080", margin: "20px 0 10px" }}>
                Education
              </h3>
              <Education educationData={educationData} />
            </div>

            <div className="about-content-img">
              <img src={pfp} alt="Jevo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
