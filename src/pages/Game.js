import React from 'react'
import Grid from '../components/Grid'
import Timer from '../components/Timer'
import '../styles/Game.css'

import { Link } from 'react-router-dom';

function Game({grid}) {
    return (
    <>
    <div id="header">
        <span>Timer: <Timer /> </span>
        <span>Apple Game</span>
    </div>
    <Grid grid={grid}/>
    <Link to="/">Return to Home</Link>
    </>
    )
}

export default Game