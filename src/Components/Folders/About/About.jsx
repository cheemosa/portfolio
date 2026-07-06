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
                I'm a Software Engineer based in Mangalore, India, previously 
                worked at <strong>Louisa AI</strong> — an AI startup spun off
                from Goldman Sachs, where I joined as an intern and converted
                full-time. I work across the full stack — authentication
                systems, UI features, backend pipelines, and dev tooling.
              </p>
              <p style={{ marginTop: "12px" }}>
                Some highlights from work: led a Webpack-to-Vite migration that
                cut build times by 60% and HMR from 2,719ms to 13ms, and owned a
                full auth overhaul migrating to AWS Cognito with passkey
                support.
              </p>
              <p style={{ marginTop: "12px" }}>
                Outside of work, I build side projects at the intersection of AI
                and backend engineering — <strong>RecallAI</strong>, an
                AI-powered spaced repetition app, and a{" "}
                <strong>Mutual Fund Tracker</strong> with LLM signals and an
                automated GitHub Actions pipeline.
              </p>
              <p style={{ marginTop: "12px" }}>
                Apart from these, I love playing sports, watching football,
                playing video games, and binge watching YouTube videos.
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
                      <ul style={{ marginTop: "8px", paddingLeft: "16px" }}>
                        {w.description
                          .split(". ")
                          .filter(Boolean)
                          .map((point, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.6",
                                marginBottom: "6px",
                                color: "#333",
                              }}
                            >
                              {point.trim().replace(/\.$/, "")}
                            </li>
                          ))}
                      </ul>
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
