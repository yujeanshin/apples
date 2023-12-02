import React from 'react'
import '../styles/Block.css'

function Block({id, active, className, number, onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
    <div id={id} className={`${className} ${active ? 'active' : ''}`} onClick={handleClick}>
        <div className="block-container">
            <div className="block">{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block