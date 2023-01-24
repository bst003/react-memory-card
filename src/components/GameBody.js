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
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default,
        };

        // console.log(formattedData);

        return formattedData;
    };

    const shuffle = (array) => {
        array.sort((a, b) => {
            return Number(Math.random() - 0.5);
        });

        return array;
    };

    useEffect(() => {
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
            let initialPokeArr = [];

            for (let i = 0; i <= 11; i++) {
                const pokemonData = await Promise.resolve(getPokemonData(i + 1));

                initialPokeArr.push(pokemonData);

                console.log(pokemonData);
            }

            console.log(initialPokeArr);

            initialPokeArr = shuffle(initialPokeArr);

            console.log(initialPokeArr);

            return initialPokeArr;
        };

        const fillPokeArrState = async () => {
            const initialPokeArr = await createInitialPokeArr();

            setPokeArr(initialPokeArr);
        };

        fillPokeArrState();
    }, []);

    return (
        <section className="gameBody">
            <p>
                Click the cards below to earn points, if you click the same card twice your score is
                reset to zero.
            </p>
        </section>
    );
}

export default GameBody;
