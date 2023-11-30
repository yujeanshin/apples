import React, { useState } from 'react'
import Timer from '../components/Timer'
import Block from '../components/Block'
import '../styles/Game.css'

import { Link } from 'react-router-dom';

const numRows = 5;
const numCols = 5;

// create numRows x numCols array of numbers
let gridVals = []
for (let row = 0; row < numRows; row ++) {
    gridVals.push(Array(5).fill(0));
    for (let col = 0; col < numCols; col ++) {
        // random integer from 1 to 9
        gridVals[row][col] = {
            id: [row, col],
            className: "block-container-container",
            number: Math.floor(Math.random() * 9) + 1
        };
    }
}
console.log(gridVals);

function Game() {
    const [grid, setGrid] = useState(gridVals);

    // makes the value null when clicked
    const handleBlockClick = (row, col) => {
        const updatedGrid = grid.map((blockRow, rowIndex) => {
            // a box in this row has been clicked
            if (rowIndex === row) {
                return (
                    blockRow.map((block, colIndex) => {
                        // this particular block has been clicked
                        if (colIndex === col) {
                            return {
                                id: [rowIndex, colIndex],
                                className: "selected block-container-container",
                                number: null
                            };
                        }
                        // else, this block has not been clicked
                        else { return block; }
                    })
                );
            }
            // else, no box in this row has been clicked
            else { return blockRow; }
        });

        console.log("updated", updatedGrid);
        // Update the state with the new grid
        setGrid(updatedGrid);
    };

    let displayGrid = grid.map((blockRow, rowIndex) => 
        <tr key={rowIndex}>
            {blockRow.map((block, colIndex) => {
                return(
                    <td>
                        <Block id={block.id} className={block.className} number={block.number} onClick={() => handleBlockClick(rowIndex, colIndex)} />
                    </td>
                );
            })}
        </tr>
    );

    return (
    <>
    <div id="header">
        {/* <span>Timer: <Timer /> </span> */}
        <span>Apple Game</span>
    </div>
    <table>
        {displayGrid}
    </table>
    <Link to="/">Return to Home</Link>
    </>
    );
}

export default Game