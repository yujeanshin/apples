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

    const containerRef = useRef(null);

    // "is the selection box in use"?
    const [isSelecting, setIsSelecting] = useState(false);
    // items that are currently selected with the selection box
    const [selectedItems, setSelectedItems] = useState([]);

    const handleStartSelection = () => {
        setIsSelecting(true);
        setSelectedItems([]);
    }
    const finishSelection = (items, e) => {
        setIsSelecting(false);
        
        // get selected items
        const selectedIds = items.map(item => item.getAttribute('id'));
        console.log(selectedIds)
        setSelectedItems(selectedIds);
        console.log(selectedItems)
        
        // get sum of selected numbers
        const numbers = items.map(item => parseInt(item.getAttribute('number')));
        let sum = numbers.reduce((runningSum, current) => {return runningSum + current}, 0);
        
        // if the sum is the target, add .removed class
        if (sum === target) {
            // add .removed to appropriate blocks
            let nextState = grid.map((blockRow, rowIndex) => 
                {blockRow.map((block, colIndex) => {
                    console.log(block.id)
                    console.log(selectedIds)
                    if (selectedIds.includes(block.id)) {
                        console.log(block.id);
                        let blockTemp = block;
                        blockTemp.className += " removed";
                        return blockTemp;
                    }
                    else { return block; }
                });
            return blockRow;
        });
            console.log(nextState)
            setGrid(nextState);
            console.log(grid)
        }
    }

    // active: 2 means target, 1 means simply selected, 0 means no change
    let displayGrid = grid.map((blockRow, rowIndex) =>
        <tr key={rowIndex}>
            {blockRow.map((block, colIndex) => {
                return (
                    <td>
                        <Block id={block.id} active={selectedItems.includes(block.id)} className={block.className} number={block.number} />
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
            startSelectionCallback={handleStartSelection}
            finishSelectionCallback={finishSelection}
        />
    </>
    );
}

export default Grid