import React from 'react'
import '../styles/Block.css'

function Block({number}) {
  return (
    <>
    <div className="block-container-container">
        <div className="block-container">
            <div className="block">{number}</div>
        </div>
    </div>
    </>
  )
}

export default Block