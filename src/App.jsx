import { useEffect, useState } from "react";
import Message from "./Components/Message/Message";
import Taskbar from "./Components/Taskbar/Taskbar";
import Folders from "./Components/Folders/Folders";
import startupImage from "./assets/images/startupImage.png";
import windowsMp3 from "./assets/images/Audio/windows.mp3";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  };

  return isLoading ? (
    <div className="landing">
      <div className="landing-top-bar" />
      <div className="landing-main">
        <div className="landing-center">
          <div className="landing-identity">
            <span className="landing-name">Jeevottam Bhat</span>
            <div className="landing-windows-logo">
              <div className="logo-grid">
                <div className="logo-pane red" />
                <div className="logo-pane green" />
                <div className="logo-pane blue" />
                <div className="logo-pane yellow" />
              </div>
              <span className="logo-xp">xp</span>
            </div>
          </div>
          <button className="start-btn" onClick={handleClick}>
            Start
          </button>
        </div>
      </div>
      <div className="landing-bottom-bar" />
    </div>
  ) : (
    <div className="main-container">
      <Message />
      <Folders />
      <Taskbar />
      <audio src={windowsMp3} autoPlay />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
