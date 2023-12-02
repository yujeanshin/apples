import './styles/App.css';
import Home from './pages/Home';
import Game from './pages/Game'
import Settings from './pages/Settings'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<Game />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      {/* <Route path="/gameover" element={<GameOver />}></Route> */}
    </Routes>
    </>
  );
}

export default App;
