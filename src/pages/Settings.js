import React from 'react'
import '../styles/Settings.css';

import { Link } from 'react-router-dom';

function Settings({colors, color, setColor, timerOn, setTimerOn}) {
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

  return (
    <>
    <div>Settings</div>
    <div id="color-change-container">
      <select name="chooseFruit" onChange={onColorChange}>
        {colorOptions}
      </select>
    </div>
    <div id="timer-toggle-container">
    <label class="switch" onChange={onTimerChange}>
        <input type="checkbox" checked={timerOn}/>
        <span class="slider"></span>
    </label>
    </div>
    <hr/>
    <Link to="/">Return to Home</Link>
    </>
  )
}

export default Settings