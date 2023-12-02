import React from 'react'
import '../styles/Block.css'

function Block({id, className, number}) {

  return (
    <>
    <div id={id} number={number} className={className} >
        <div className="block-container">
            <div className="block">{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block