import React, { useState } from 'react'
import Block from './Block'
// import SelectionBox from './SelectionBox'
import "../styles/Block.css"

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
console.log(gridVals);


function Grid() {
    const [grid, setGrid] = useState(gridVals);

    // add class "selected" when clicked
    const handleBlockClick = (row, col) => {
        const updatedGrid = grid.map((blockRow, rowIndex) => {
            // a box in this row has been clicked
            if (rowIndex === row) {
                return (
                    blockRow.map((block, colIndex) => {
                        // change className for the box that was clicked
                        if (colIndex === col) {
                            block.className += " selected"
                        }
                        return block;
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
                return (
                    <td>
                        <Block id={block.id} className={block.className} number={block.number} onClick={() => handleBlockClick(rowIndex, colIndex)} />
                    </td>
                );
            })}
        </tr>
    );

    return displayGrid;
}

export default Grid