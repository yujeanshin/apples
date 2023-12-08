import React from 'react'
import Grid from '../components/Grid'
// import Timer from '../components/Timer'
import '../styles/Game.css'

import { Link } from 'react-router-dom';

function Game({color, timerOn, soundOn}) {
    return (
    <>
    <div id="header">
        {/* <span>Timer: <Timer /> </span> */}
        <span>Apple Game</span>
    </div>
    <Grid color={color} timerOn={timerOn} soundOn={soundOn}/>

    <Link to="/">Return to Home</Link>
    </>
    );
}

export default Game