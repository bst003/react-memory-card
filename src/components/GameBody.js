import React, { useState, useEffect } from "react";

/*

THINGS TO DO
    - Learn more about async functions
    - Randomize array before adding to state

*/

function GameBody(props) {
    const [pokeArr, setPokeArr] = useState([]);

    const formatPokemonData = (data) => {
        const formattedData = {
            name: data.name,
            sprite: data.sprites.front_default,
        };

        console.log(formattedData);

        return formattedData;
    };

    const getPokemonData = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const unformattedPokemonData = await response.json();

            const formattedPokemonData = formatPokemonData(unformattedPokemonData);

            return formattedPokemonData;
        } catch (err) {
            console.log("Error fetching pokemone");
            console.log(err);
        }
    };

    const createInitialPokeArr = async () => {
        const initialPokeArr = [];

        for (let i = 0; i <= 11; i++) {
            const pokemonData = await Promise.resolve(getPokemonData(i + 1));

            initialPokeArr.push(pokemonData);

            console.log(pokemonData);
        }

        console.log(initialPokeArr);

        return initialPokeArr;
    };

    const fillPokeArrState = async () => {
        const initialPokeArr = await createInitialPokeArr();

        setPokeArr(initialPokeArr);
    };

    useEffect(() => {
        fillPokeArrState();
    }, []);

    return (
        <main>
            <section className="">
                <p>
                    Click the cards below to earn points, if you click the same card twice your
                    score is reset to zero.
                </p>
            </section>
        </main>
    );
}

export default GameBody;
