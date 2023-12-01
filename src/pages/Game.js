import React from 'react'
import Grid from '../components/Grid'
import SelectionBox from '../components/SelectionBox'
// import Timer from '../components/Timer'
import '../styles/Game.css'

import { Link } from 'react-router-dom';

function Game() {

    return (
    <>
    <div id="header">
        {/* <span>Timer: <Timer /> </span> */}
        <span>Apple Game</span>
    </div>
    <table>
        <Grid />
        <SelectionBox />
    </table>
    <Link to="/">Return to Home</Link>
    </>
    );
}

export default Game