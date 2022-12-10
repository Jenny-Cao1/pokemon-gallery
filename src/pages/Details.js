import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
    const { SelectedPokemon } = location.state;

    const getDetails = () => {
        const result = pokemons.find(pokemon => {
            return pokemon.name === SelectedPokemon
        })   
        setSelectedPokemon(result)
    }
    
    useEffect(() => {
        getDetails();
        console.log(selectedPokemon)
    }, [selectedPokemon]);


    return(
        <div className="container mx-auto p-5">
            <div className='container mx-auto p-5 rounded shadow-lg bg-blue-100	'>
                <div className='grid grid-flow-row sm:grid-flow-col gap-3 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-6 mx-auto'>
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
                    <div className='sm:col-span-1 md:col-span-4 min-h-[20rem] bg-white'>
                        <h1>ge</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;