import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Card from './Card';
import { useEffect, useState } from 'react';

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
      {character.map(rickAndMorty => (
        <Card
          key={rickAndMorty.id}
          img={rickAndMorty.image}
          name={rickAndMorty.name}
        />
      ))}
      <Navbar />
    </div>
  );
}

export default App;
