import React, { useEffect, useState } from "react";
import "./assets/scss/app.scss";

import uniqid from "uniqid";

import Header from "./components/Header";
import Gamebody from "./components/GameBody";
import GameModal from "./components/GameModal";

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
    const [modalOpen, setModalOpen] = useState(false);

    const updateScore = (reset) => {
        if (reset) {
            setModalOpen(true);
            return;
        }

        setScore(score + 1);
    };

    // Check if highScore needs to be updated after score is updated
    useEffect(() => {
        const checkHighScore = () => {
            if (score > highScore) {
                setHighScore(score);
            }
        };

        const checkForWin = () => {
            if (score === 12) {
                setModalOpen(true);
            }
        };

        checkHighScore();
        checkForWin();
    }, [score]);

    const resetGame = () => {
        setScore(0);
        setGameId(uniqid());
    };

    const closeAlertModal = () => {
        resetGame();
        setModalOpen(false);
    };

    return (
        <div className="App">
            <Header score={score} highScore={highScore} />
            <main className="main-content">
                <div className="main-content__inner wrap">
                    <Gamebody gameId={gameId} updateScore={updateScore} />
                </div>
            </main>
            <GameModal score={score} modalIsOpen={modalOpen} closeAlertModal={closeAlertModal} />
        </div>
    );
}

export default App;
