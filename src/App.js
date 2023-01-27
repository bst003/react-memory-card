import React, { useEffect, useState } from "react";
import "./assets/scss/app.scss";

import uniqid from "uniqid";

import Header from "./components/Header";
import Gamebody from "./components/GameBody";

/*
Modal Notes
    - Use https://www.npmjs.com/package/react-modal?
    - Two Separate Modal?
        - Game Over
        - You Win
    - OR one modal with dynamic content?
        - based on gameOver prop?
            - If gameOver prop is set as true then have content show game over message
            - Else show you win message
        - Always show score at bottom of the modal


*/

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameId, setGameId] = useState(uniqid());

    const updateScore = (reset) => {
        if (reset) {
            setScore(0);
            setGameId(uniqid());
            return;
        }

        setScore(score + 1);
    };

    useEffect(() => {
        const checkHighScore = () => {
            if (score > highScore) {
                setHighScore(score);
            }
        };

        checkHighScore();
    }, [score, highScore]);

    return (
        <div className="App">
            <Header score={score} highScore={highScore} />
            <main className="main-content">
                <div className="main-content__inner wrap">
                    <Gamebody gameId={gameId} updateScore={updateScore} />
                </div>
            </main>
        </div>
    );
}

export default App;
