import React from 'react'
import Timer from '../components/Timer'
import Block from '../components/Block'
import '../styles/Game.css'

import { Link } from 'react-router-dom';

const numRows = 10;
const numCols = 17;

// create numRows x numCols array of numbers
let grid = []
for (let row = 0; row < numRows; row ++) {
    grid.push(Array(5).fill(0));
    for (let col = 0; col < numCols; col ++) {
        // random integer from 1 to 9
        grid[row][col] = Math.floor(Math.random() * 9) + 1;
    }
}
console.log(grid);

function Game() {
    let newGrid = grid.map((numbers, index) => 
        <tr key={index}>
            {numbers.map((number) => 
                <td><Block number={number}/></td>
            )}
        </tr>
    );
    
    return (
    <>
    <div id="header">
        <span>Timer: <Timer /> </span>
        <span>Apple Game</span>
    </div>
    <table>
        {newGrid}
    </table>
    <Link to="/">Return to Home</Link>
    </>
    );
}

export default Game