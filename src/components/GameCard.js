import React, { useState, useEffect, useRef } from "react";

function GameCard(props) {
    const { name, sprite, gameId, trigger } = props;

    const [clicked, setClicked] = useState(0);

    const triggerButton = () => {
        if (!clicked) {
            console.log("the button is clicked");
            setClicked(1);
            trigger(false);
            return;
        }

        trigger(true);
        console.log("game over");
    };

    const buttonRef = useRef(null);

    useEffect(() => {
        const buttonElement = buttonRef.current;

        buttonElement.addEventListener("click", triggerButton);

        return () => {
            buttonElement.removeEventListener("click", triggerButton);
        };
    });

    useEffect(() => {
        setClicked(false);
    }, [gameId]);

    return (
        <button className="gameCard" type="button" ref={buttonRef}>
            <div className="gameCard__inner">
                <img src={sprite} alt="Sprite of {name}" />
                <p>{name}</p>
                {/* {clicked ? "clicked" : ""} */}
            </div>
        </button>
    );
}

export default GameCard;
