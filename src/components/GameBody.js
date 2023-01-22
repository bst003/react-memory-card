import React, { useState, useEffect } from "react";

/*

How to set up fetches for individual pokemon data?
    - Does this have to be set up on the top level (GameBody)
      or can it be set up on lower level?
    - Consider how re-rendering will occur. Can't perform fetch each re-render
    - Pass pokemon ID to sub compoent and only run fetch if ID changes

*/

function GameBody(props) {
    const [pokeArr, setPokeArr] = useState([]);

    const getPokemonData = async (id) => {
        try {
            // const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=12");
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const pokemonData = await response.json();

            console.log(pokemonData);

            return pokemonData;
        } catch (err) {
            console.log("Error fetching pokemone");
            console.log(err);
        }
    };

    useEffect(() => {
        for (let i = 0; i <= 11; i++) {
            getPokemonData(i + 1);
        }
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
