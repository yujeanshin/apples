import React from 'react'
import '../styles/Block.css'
import Red from '../images/red.png'
import Orange from '../images/orange.png'
import Gray from '../images/gray.png'
import None from '../images/none.png'

// index of the None color
let noneIndex = 3;

function Block({id, className, number, color}) {
  let fruits = [Red, Orange, Gray, None];
  return (
    <>
    <div id={id} number={number} className={className} style={{border: color===noneIndex ? 'solid #000' : 'none', borderRadius: '10px'}}>
        <div className="block-container">
            <img src={fruits[color]} alt=""/>
            <div className="block-text" style={{color: color===noneIndex ? '#000' : '#FFF'}}>{number}</div>
        </div>
    </div>
    </>
  )
};



export default Block