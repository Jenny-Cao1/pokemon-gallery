import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchPokemon = () => {
      const promises = [];
      for (let i = 1; i <= 151; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
          promises.push(
              fetch(url)
              .then((res) => res.json()));
      }
      Promise.all(promises)
          .then((results) => {
          const pokemons = results.map((result) => ({
              name: result.name,
              image: result.sprites['front_default'],
              type: result.types.map((type) => type.type.name),
              weight: result.weight,
              height: result.height,
              id: result.id
          }));
          setPokemons(pokemons);
          setLoading(false);
      });
  };

  useEffect(() => {
      fetchPokemon();
  }, []);

  return(
    <div className='bg-sky-600	 min-h-screen mx-auto'>
      <div className='container mx-auto p-5'>
        <div className="max-w-md container mx-auto">
          <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo"/></Link>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<Home pokemons={pokemons} isLoading={isLoading} />} />
          <Route path="/details/:pokemon" element={<Details pokemons={pokemons} />} />
      </Routes>
    </div>
  )
}

export default App;
