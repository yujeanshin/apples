import React from 'react'
import Block from '../components/Block'

import { Link } from 'react-router-dom';

function Game() {
  return (
    <>
    <div>Game</div>
    <Block number={10}/>
    <Link to="/">Return to Home</Link>
    </>
  )
}

export default Game