import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const Details = ( {pokemons} ) => {

    const [selectedPokemon, setSelectedPokemon] = useState({
        name:"",
        image:"",
        type:[],
        weight:"",
        height:"",
        id:""
    });

    const location = useLocation();
    const { SelectedPokemon, SelectedPokemonId } = location.state;

    const getDetails = () => {
        const result = pokemons.find(pokemon => {
            return pokemon.name === SelectedPokemon
        })   
        setSelectedPokemon(result)
    }
    
    useEffect(() => {
        getDetails();
    }, );


    return(
        <div className="container mx-auto p-5">
            <div className='container mx-auto p-5 rounded shadow-xl bg-blue-300	pb-10'>
                <Link to='/'>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide py-2 px-4 rounded mb-4">
                        Back
                    </button>
                </Link>
                <div className='grid grid-flow-row sm:grid-flow-col gap-3 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-6 mx-auto'>
                    <div className='sm:col-span-1 md:col-span-4 min-h-[20rem] bg-gray-600 rounded p-4'>
                        <div className='bg-gray-200 rounded-t-sm '>
                            <h1 className="text-center font-bold tracking-wide bg-gray-200 py-2 ">Evolutions</h1>
                            <div className="bg-white p-5">something</div>
                        </div>
                        <div className='bg-gray-200 rounded-t-sm text-center font-bold tracking-wide bg-gray-200 py-2 '>
                            Evolutions
                        </div>
                    </div>
                    <div className="sm:col-span-1 md:col-span-2 bg-slate-500">
                        { selectedPokemon.name &&
                            <PokemonCard 
                                key={selectedPokemon.id}
                                id={selectedPokemon.id}
                                name={selectedPokemon.name}
                                type={selectedPokemon.type}
                                weight={selectedPokemon.weight}
                                height={selectedPokemon.height}
                                image={selectedPokemon.image} /> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;