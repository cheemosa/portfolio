import { useEffect, useState } from 'react'
import Message from './Components/Message/Message'
import Taskbar from './Components/Taskbar/Taskbar'
import Folders from './Components/Folders/Folders';
import startupImage from './assets/images/startupImage.png'
import windowsMp3 from "./assets/images/Audio/windows.mp3";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoading,setIsLoading] = useState(true);

  const handleClick = () =>{
    setInterval(()=>{
      setIsLoading(false);
    },1000)
  }

  return isLoading ? (
    <div className="landing">
      <button className="start-btn" onClick={handleClick}>
        Start
      </button>
      <img src={startupImage} alt="" />
    </div>
  ) : (
    <div className="main-container">
      <Message />
      <Folders />
      <Taskbar />
      <audio src={windowsMp3} autoPlay />
      <Analytics />
    </div>
  );
}

export default App
