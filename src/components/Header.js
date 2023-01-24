import React from "react";

import Scoreboard from "./Scoreboard";

function Header(props) {
    const { score, highScore } = props;

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <h1>Pokemon Memory Game</h1>
                <Scoreboard score={score} highScore={highScore} />
            </div>
        </header>
    );
}

export default Header;
