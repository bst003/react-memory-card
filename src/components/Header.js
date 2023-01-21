import React from "react";

import Scoreboard from "./Scoreboard";

function Header(props) {
    const { score, highScore } = props;

    return (
        <header>
            <h1>Pokemon Memory Game</h1>
            <Scoreboard score={score} highScore={highScore} />
        </header>
    );
}

export default Header;
