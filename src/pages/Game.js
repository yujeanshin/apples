import React, { useState } from 'react'
import Grid from '../components/Grid'
// import Timer from '../components/Timer'
import '../styles/Game.css'

import { Link } from 'react-router-dom';

function Game() {
    const [score, setScore] = useState(0);
    return (
    <>
    <div id="header">
        {/* <span>Timer: <Timer /> </span> */}
        <span>Apple Game</span>
    </div>
    <Grid score={score} setScore={setScore} />

    <Link to="/">Return to Home</Link>
    </>
    );
}

export default Game