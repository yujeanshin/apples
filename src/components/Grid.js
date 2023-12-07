import React, { useState, useRef } from 'react'
import Block from './Block'
import Timer from '../components/Timer'
import "../styles/Block.css"

import { ReactMouseSelect } from 'react-mouse-select'

const numRows = 8;
const numCols = 10;

const target = 10;


function Grid({color, timerOn}) {
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const handleTimeUp = () => {
        setIsGameOver(true);
    }

    const resetGame = () => {
        setScore(0);
        setIsGameOver(false);
        setGrid(resetGrid());
    }

    const resetGrid = () => {
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
        return gridVals;
    }
    
    const [grid, setGrid] = useState(resetGrid());

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
            let nextState = grid.map((blockRow) =>
                {blockRow.map((block) => {
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
            {blockRow.map((block) => {
                return (
                    <td>
                        <Block id={block.id} className={block.className} number={block.number} color={color}/>
                    </td>
                );
            })}
        </tr>
    );

    
    if (timerOn) {
        return (
        <>
            {isGameOver ? (
                <>
                <div>Game Over</div>
                <div>Final score: {score} out of {numRows*numCols}</div>
                <button onClick={resetGame}>Restart</button>
                </>
            ) : (
            <>
                <Timer onTimeUp={handleTimeUp} />
                <div>Score: {score}</div>
                <button onClick={resetGame}>Restart</button>
                <table>{displayGrid}</table>
                <ReactMouseSelect
                    containerRef={containerRef}
                    itemClassName={"block-container-container"}
                    finishSelectionCallback={finishSelection}
                    tolerance={5}
                />
            </>
            )
            }
        </>
        );
    }
    
    return (
        <>
        <div>Score: {score}</div>
        <button onClick={resetGame}>Restart</button>
        <table>{displayGrid}</table>
        <ReactMouseSelect
            containerRef={containerRef}
            itemClassName={"block-container-container"}
            finishSelectionCallback={finishSelection}
            tolerance={5}
        />
    </>
    );
}

export default Grid