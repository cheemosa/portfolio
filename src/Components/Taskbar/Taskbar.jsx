import React, { useEffect, useState, useRef } from "react";
import "./Taskbar.css";
import { social } from "../../data.jsx";
import { ImWindows } from "react-icons/im";
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import badpig from "../../assets/images/Audio/badpig.mp3";

const Taskbar = ({ handleRestart }) => {
  const [time, setTime] = useState(new Date());
  const [sound, setSound] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div className="taskbar">
      {!sound && <audio ref={audioRef} src={badpig} autoPlay />}
      <div className="taskbar-first">
        <button onClick={handleRestart}>
          <ImWindows size={30} />
          <p>Start</p>
        </button>
        {social.map((socio) => {
          const { id, url, icon } = socio;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </div>

      <div className="taskbar-second">
        <div className="taskbar-second-icons">
          {sound ? (
            <GiSpeakerOff
              size={30}
              onClick={() => {
                setSound(!sound);
              }}
            />
          ) : (
            <GiSpeaker
              size={30}
              onClick={() => {
                setSound(!sound);
              }}
            />
          )}
        </div>
        <div className="taskbar-second-date">
          <h4>{time.toLocaleDateString()}</h4>
          <h4>{time.toLocaleTimeString()}</h4>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
