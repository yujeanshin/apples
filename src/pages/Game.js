import React, {useState} from 'react'
import Grid from '../components/Grid'
import Timer from '../components/Timer'
import '../styles/Game.css'

import { Link, useNavigate } from 'react-router-dom';

function Game({grid}) {
    const navigate = useNavigate();
    const [totalSeconds, setTotalSeconds] = useState(120);

    const handleSecondsChange = (newSeconds) => {
        setTotalSeconds(newSeconds);
    };
    if (totalSeconds === 117) {
        navigate('/gameover');
    }

    return (
    <>
    <div id="header">
        <span>Timer: <Timer onSecondsChange={handleSecondsChange} /> </span>
        <span>Apple Game</span>
    </div>
    <Grid grid={grid}/>
    <Link to="/">Return to Home</Link>
    </>
    );
}

export default Game