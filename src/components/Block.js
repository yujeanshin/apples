import React from 'react'
import '../styles/Block.css'

function Block({id, active, className, number, onClick}) {

  return (
    <>
    <div id={id} number={number} className={`${className} ${active ? 'active' : ''}`} >
        <div className="block-container">
            <div className="block">{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block