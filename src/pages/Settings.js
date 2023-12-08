import React, {useEffect} from 'react'
import '../styles/Settings.css';
import pop from "../images/pop.mp3"

import { Link } from 'react-router-dom';

function Settings({colors, color, setColor, timerOn, setTimerOn, soundOn, setSoundOn}) {
  let colorOptions = colors.map((value, index) => 
    {
      if (index === color) {
      return (<option selected>{value}</option>)
      }
      return (<option>{value}</option>)
    }
  );

  const onColorChange = (e) => {
    const index = e.target.selectedIndex;
    setColor(index);
  }

  const onTimerChange = () => {
    setTimerOn(prevState => !prevState);
  }

  const popAudio = new Audio(pop);

  const onSoundChange = () => {
    setSoundOn(prevState => !prevState);
  }

  useEffect(() => {
    if (soundOn) {
      popAudio.play();
    }
  }, [soundOn]);
  
  return (
    <>
    <h1>Settings</h1>
    
    <div className="settings-container">

      <div id="color-change-container">
        Color: <select name="chooseFruit" onChange={onColorChange}>
          {colorOptions}
        </select>
      </div>

      <div id="timer-toggle-container">
        <p>Toggle timer</p>
        <label class="switch" onChange={onTimerChange}>
            <input type="checkbox" checked={timerOn}/>
            <span class="slider"></span>
        </label>
      </div>

      <div id="sound-toggle-container">
        <p>Toggle sound</p>
        <label class="switch" onChange={onSoundChange}>
            <input type="checkbox" checked={soundOn} />
            <span class="slider"></span>
        </label>
      </div>

    </div>
    
    <Link to="/" className="link-container link"><button>Return to Home</button></Link>
    </>
  )
}

export default Settings