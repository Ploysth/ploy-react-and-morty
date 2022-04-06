import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Homepage';
import RandomPage from './pages/RandomPage';
import FavoritesPage from './pages/FavoritesPage';
import InfosPage from './pages/InfosPage';

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
        <Route path="/infos/:id" element={<InfosPage character={character} /> } />
        <Route path="/random" element={<RandomPage character={character} />} />
        <Route path="/favorites" element={<FavoritesPage character={character} />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
