import React from 'react'
import TitleCard from '../images/title-crop.png'

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="header">
        <img src={TitleCard} alt="Apple Game"/>
    </div>
    <div className="link-container">
        <span><Link to="/game"><button>Start Game</button></Link></span>
        <br/>
        <br/>
        <span><Link to="/settings"><button>Settings</button></Link></span>
      </div>
    </>
  );
}

export default Home;
