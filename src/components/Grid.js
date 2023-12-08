import React, { useState, useEffect } from 'react'
import Block from './Block'
import Timer from './Timer'
import '../styles/Grid.css'
import pop from "../images/pop.mp3"

import { ReactMouseSelect } from 'react-mouse-select'

// number of columns and rows in the grid
const numRows = 8;
const numCols = 8;

// target number that the numbers must sum to for blocks to disappear
const target = 10;

// time (in seconds) given if then timer is enabled
const totalSeconds = 60;

function Grid({color, timerOn, soundOn}) {
    // state to keep track of user's score
    const [score, setScore] = useState(0);
    // state to keep track of seconds remaining
    const [seconds, setSeconds] = useState(totalSeconds);
    // state to keep track of whether the game is over (true) or still being played (false)
    const [isGameOver, setIsGameOver] = useState(false);
    // the game is over when the time is up or all apples are gone
    const handleTimeUp = () => {
        setIsGameOver(true);
    }
    useEffect(() => {
        if (score === numRows*numCols) {
            setIsGameOver(true);
        }
    }, [score]);

    const resetGrid = () => {
        // create numRows x numCols array of numbers
        let gridVals = []
        for (let row = 0; row < numRows; row++) {
            gridVals.push(Array(5).fill(0));
            for (let col = 0; col < numCols; col++) {
                gridVals[row][col] = {
                    id: row + "," + col,
                    className: "block-container-container no-select-text",
                    // assigns a random integer from 1 to 9
                    number: Math.floor(Math.random() * 9) + 1,
                };
            }
        }
        return gridVals;
    }

    // resets the game states
    const resetGame = () => {
        setScore(0);
        setIsGameOver(false);
        setGrid(resetGrid());
        setSeconds(totalSeconds);
    }
    
    // initially creates the grid
    const [grid, setGrid] = useState(resetGrid());

    // for playing the sound later
    const popAudio = new Audio(pop);

    const finishSelection = (items, e) => {
        // get sum of selected numbers
        const numbers = items.map(item => parseInt(item.getAttribute('number')));
        let sum = numbers.reduce((runningSum, current) => {return runningSum + current}, 0);
        
        // if the sum is the target, add .removed class
        if (sum === target) {
            // play the sound if the blocks will be removed
            if (soundOn) { popAudio.play() }
            // get selected items
            const selectedIds = items.map(item => item.getAttribute('id'));
            // add .removed to appropriate blocks
            setGrid(prevGrid => prevGrid.map((blockRow) => 
                {blockRow.map((block) => {
                    let blockTemp = block;
                    if (selectedIds.includes(block.id)) {
                        blockTemp.className += " removed";
                        // set the number to 0 to avoid complications with non-removed blocks
                        blockTemp.number = 0;
                        setScore(prevScore => prevScore + 1)
                    }
                    return blockTemp;
                    });
                    return blockRow;
                }
            ));
        }
    }
    
    // put the values of the grid into a displayable form
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
                    {/* game over screen */}
                    <div className="header-game-over">
                        <h3>Game Over</h3>
                        <p>Final score: {score} out of {numRows*numCols}</p>
                    </div>
                    <div className="link-container">
                        <button onClick={resetGame}>Restart</button>
                    </div>
                </>
            ) : (
            <>
                {/* classic game screen */}
                <div className="header-game">
                    <Timer onTimeUp={handleTimeUp} seconds={seconds} setSeconds={setSeconds}/>
                    <span className="space-between-elements"></span>
                    <span>Score: {score}</span>
                </div>
                <div className="link-container"><button onClick={resetGame}>Restart</button></div>
                <table>{displayGrid}</table>
                <ReactMouseSelect
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
        {/* no timer */}
        <div className="header-game">
            <span>Score: {score}</span>
        </div>
        <div className="link-container"><button onClick={resetGame}>Restart</button></div>
        <table>{displayGrid}</table>
        <ReactMouseSelect
            itemClassName={"block-container-container"}
            finishSelectionCallback={finishSelection}
            tolerance={5}
        />
    </>
    );
}

export default Grid