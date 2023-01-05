// import './App.css';
import PokemonCard from '../components/PokemonCard';
import PokemonSearch from '../components/PokemonSearch';
import React, { useState } from 'react'

const Home = ({pokemons, isLoading}) => {
    const [filter, setFilter] = useState("");

    const pokemonCards = pokemons.map(pokemon => (
    pokemon.name.includes(filter.toLowerCase()) &&
    <PokemonCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        weight={pokemon.weight}
        height={pokemon.height}
        image={pokemon.image}
    />
    ))

    return (
        <div className='container mx-auto p-5'>
            <PokemonSearch searchText={(text) => setFilter(text)}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 mx-auto  bg-blue-300 p-6 rounded-lg shadow-xl'>
                {isLoading ? <h1 className="col-span-4 text-[70px] text-white">Fetching Pokemon, please wait!</h1> : pokemonCards}
            </div>
        </div>

    );
}

export default Home;