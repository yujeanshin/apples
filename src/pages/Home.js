import React from 'react'

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="header">
        <h1>Apple Game</h1>
    </div>
    <div>
        <Link to="/game">Game</Link>
        <br />
        <Link to="/settings">Settings</Link>
    </div>
    </>
  );
}

export default Home;
