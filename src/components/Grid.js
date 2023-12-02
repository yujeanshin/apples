import React, { useState, useRef } from 'react'
import Block from './Block'
import "../styles/Block.css"

import { ReactMouseSelect } from 'react-mouse-select'

const numRows = 5;
const numCols = 5;

// create numRows x numCols array of numbers
let gridVals = []
for (let row = 0; row < numRows; row++) {
    gridVals.push(Array(5).fill(0));
    for (let col = 0; col < numCols; col++) {
        // random integer from 1 to 9
        gridVals[row][col] = {
            id: [row, col],
            className: "block-container-container no-select-text",
            number: Math.floor(Math.random() * 9) + 1
        };
    }
}


function Grid() {
    // selection box
    const containerRef = useRef(null);

    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleStartSelection = () => {
        setIsSelecting(true);
        setSelectedItems([]);
    }
    const finishSelection = (items, e) => {
        setIsSelecting(false);
        const selectedIds = items.map(item => item.getAttribute('id'));
        setSelectedItems(selectedIds);
        const numbers = items.map(item => parseInt(item.getAttribute('number')));
        let sum = numbers.reduce((runningSum, current) => {return runningSum + current}, 0);
    }


    let displayGrid = gridVals.map((blockRow, rowIndex) =>
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