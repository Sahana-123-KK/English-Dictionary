import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ModeState from './hooks/ModeState';
import { useContext } from 'react';
import ModeContext from './hooks/ModeContext';

function App() {
  const { mode } = useContext(ModeContext)
  return (
    <div className={mode === "light" ? "flexxcolalign" : "flexxcolaligndark"} >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
