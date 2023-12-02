import React, { useState, useRef } from 'react'
import Block from './Block'
import "../styles/Block.css"

import { ReactMouseSelect } from 'react-mouse-select'

const numRows = 5;
const numCols = 5;

const target = 10;

// create numRows x numCols array of numbers
let gridVals = []
for (let row = 0; row < numRows; row++) {
    gridVals.push(Array(5).fill(0));
    for (let col = 0; col < numCols; col++) {
        // random integer from 1 to 9
        gridVals[row][col] = {
            id: row + "," + col,
            className: "block-container-container no-select-text",
            number: Math.floor(Math.random() * 9) + 1,
        };
    }
}


function Grid() {
    const [grid, setGrid] = useState(gridVals);
    const [score, setScore] = useState(0);

    const containerRef = useRef(null);

    const finishSelection = (items, e) => {
        // get sum of selected numbers
        const numbers = items.map(item => parseInt(item.getAttribute('number')));
        let sum = numbers.reduce((runningSum, current) => {return runningSum + current}, 0);
        
        // if the sum is the target, add .removed class
        if (sum === target) {
            // get selected items
            const selectedIds = items.map(item => item.getAttribute('id'));
            // add .removed to appropriate blocks
            let nextState = grid.map((blockRow, rowIndex) => 
                {blockRow.map((block, colIndex) => {
                    let blockTemp = block;
                    if (selectedIds.includes(block.id)) {
                        blockTemp.className += " removed";
                        blockTemp.number = 0;
                        setScore(prevState => prevState + 1)
                    }
                    return blockTemp;
                });
                return blockRow;
            });
            setGrid(nextState);
        }
    }

    // active: 2 means target, 1 means simply selected, 0 means no change
    let displayGrid = grid.map((blockRow, rowIndex) =>
        <tr key={rowIndex}>
            {blockRow.map((block, colIndex) => {
                return (
                    <td>
                        <Block id={block.id} className={block.className} number={block.number} />
                    </td>
                );
            })}
        </tr>
    );

    return (
    <>
        {displayGrid}
        <ReactMouseSelect
            containerRef={containerRef}
            itemClassName={"block-container-container"}
            finishSelectionCallback={finishSelection}
        />
        <div>Score: {score}</div>
    </>
    );
}

export default Grid