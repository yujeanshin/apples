import React from 'react'
import Grid from '../components/Grid'

import { Link } from 'react-router-dom';

function Game({color, timerOn, soundOn}) {
    return (
    <>
    <div>
        <h1>Apple Game</h1>
    </div>
    <Grid color={color} timerOn={timerOn} soundOn={soundOn}/>
    <div style={{paddingTop: "3em"}}></div>
    <Link to="/" className="link-container link"><button>Return to Home</button></Link>
    <div style={{paddingBottom: "1em"}}></div>
    </>
    );
}

export default Game