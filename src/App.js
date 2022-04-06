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
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/';

  const allCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    allCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage characters={characters} />} />
        <Route path="/infos/:id" element={<InfosPage characters={characters} /> } />
        <Route path="/random" element={<RandomPage characters={characters} />} />
        <Route path="/favorites" element={<FavoritesPage characters={characters} />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
