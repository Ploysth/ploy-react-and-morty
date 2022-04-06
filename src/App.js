import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Homepage';

function App() {
  const [character, setCharacter] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/';

  const allCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacter(data.results));
  };

  useEffect(() => {
    allCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage character={character} />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
