import React, { useState, useEffect } from "react";

function GameCard(props) {
    const { name, sprite } = props;

    return (
        <button className="gameCard" type="button">
            <div className="gameCard__inner">
                <img src={sprite} alt="Sprite of {name}" />
                <p>{name}</p>
            </div>
        </button>
    );
}

export default GameCard;
