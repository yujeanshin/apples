import './App.css';
import Home from './pages/Home';
import Game from './pages/Game'
import Settings from './pages/Settings'
import GameOver from './pages/GameOver'

import { Routes, Route } from 'react-router-dom';

const numRows = 5;
const numCols = 5;

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

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<Game grid={grid}/>}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/gameover" element={<GameOver />}></Route>
    </Routes>
    </>
  );
}

export default App;
