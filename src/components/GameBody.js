import React, { useEffect } from "react";

/*

How to set up fetches for individual pokemon data?
    - Does this have to be set up on the top level (GameBody)
      or can it be set up on lower level?
    - Consider how re-rendering will occur. Can't perform fetch each re-render
    - Pass pokemon ID to sub compoent and only run fetch if ID changes

*/

function GameBody(props) {
    const getPokemon = async () => {
        try {
            // const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=12");
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");

            const pokemonData = await response.json();

            console.log(pokemonData);
        } catch (err) {
            console.log("this is an error");
            console.log(err);
        }
    };

    useEffect(() => {
        getPokemon();
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
