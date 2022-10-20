import React from 'react'

const PokemonCard = ({ name, type, image, weight, height }) => {
    return(
        <div className='max-w-xs rounded overflow-hidden shadow-lg p-4 bg-gray-700'>
            <h1 className='text-center font-bold tracking-wide bg-gray-200 py-2 '>{name.charAt(0).toUpperCase()+name.slice(1)}</h1>
            <img src={image}
            alt=""
            className='w-full bg-white'/>
            <ul className='grid gap-4 grid-cols-2 grid-rows-2 p-4 flex flex-col bg-gray-50'>
                <li>
                    <h2>Weight</h2><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> {weight}kg</span>
                </li>                
                <li>
                    <h2>Height</h2><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> {height}kg</span>
                </li>
                <li className="col-span-full">
                    <h2>Type</h2>
                    {type.map((type, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {type}
                        </span>
                    ))}
                    
                </li>
            </ul>
        </div>
    )    
}

export default PokemonCard;