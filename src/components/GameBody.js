import React, { useEffect } from "react";

function GameBody(props) {
    const getPokemon = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=12");

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
