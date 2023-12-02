import React from 'react'
import '../styles/Block.css'
import Apple from './apple.png'

function Block({id, className, number}) {

  return (
    <>
    <div id={id} number={number} className={className} >
        <div className="block-container">
            <img src={Apple} alt=""/>
            <div className="block-text">{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block