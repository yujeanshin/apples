import React from 'react'

import { Link } from 'react-router-dom';

function GameOver() {
  return (
    <>
    <div>Game Over</div>
    <Link to="/">Return to Home</Link>
    <Link to="/game">Play again?</Link>
    </>
  )
}

export default GameOver