import React from 'react'
import '../styles/Block.css'

function Block({id, className, number, onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
    <div id={id} className={className} onClick={handleClick}>
        <div className="block-container">
            <div className="block">{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block