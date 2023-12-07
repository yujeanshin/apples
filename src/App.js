import React, { useState } from 'react'
import './styles/App.css';
import Home from './pages/Home';
import Game from './pages/Game'
import Settings from './pages/Settings'

import { Routes, Route } from 'react-router-dom';

function App() {
  let colors = ["Red", "Orange", "Gray", "None"];
  const [color, setColor] = useState(0);

  const [timerOn, setTimerOn] = useState(true);
  console.log("timer on?:", timerOn);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<Game color={color} timerOn={timerOn} />}></Route>
      <Route path="/settings" element={<Settings colors={colors} color={color} setColor={setColor} timerOn={timerOn} setTimerOn={setTimerOn} />}></Route>
    </Routes>
    </>
  );
}

export default App;
