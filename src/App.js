import React, { useState } from "react";
import "./assets/scss/app.scss";

import Header from "./components/Header";
import Gamebody from "./components/GameBody";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const updateScore = (reset) => {
        if (reset) {
            setScore(0);
            return;
        }

        setScore(score + 1);
        console.log(score);
    };

    return (
        <div className="App">
            <Header score={score} highScore={highScore} />
            <main className="main-content">
                <div className="main-content__inner wrap">
                    <Gamebody updateScore={updateScore} />
                </div>
            </main>
        </div>
    );
}

export default App;
