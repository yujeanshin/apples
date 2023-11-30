import React from 'react'
import '../styles/Block.css'

function Block({number, onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
    <div className="block-container-container" onClick={handleClick}>
        <div className="block-container">
            <div className="block">{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block