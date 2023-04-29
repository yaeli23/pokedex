import React from "react";
export let Pokemons = ({pokemons}) => {
    let Pokemon = ({pokemon, index}) => {

        let keys = Object.keys(pokemon).filter(key => key !== "name" && key !== "image")
        return (
            <div key={index} className='pokemon'>
                <div className="secondary-title"> {pokemon.name}:</div>
                <ul>
                    {keys.map((key, index) => {
                        return pokemon[key] && <li key={index}>{key}: {pokemon[key]}</li>
                    })}
                </ul>
                {pokemon.image  ? <img src={pokemon.image} alt="image"/>: <small>Image not found</small>}
            </div>
        )
    }

    if (pokemons === undefined || pokemons.length === 0) {
        return (
            <div className='flex-center title'>
                <div>{pokemons === undefined ? "Loading...": "No data found."}</div>
            </div>
        )
    }

    return (
        <div className='pokemons' >
            {pokemons
                .map((pokemon, index)=> {
                    return <Pokemon index={index} pokemon={pokemon}></Pokemon>
                })
            }
        </div>
    );
}
