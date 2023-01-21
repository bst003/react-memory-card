import React, { useState } from "react";
import "./assets/scss/app.scss";

import Header from "./components/Header";
import Gamebody from "./components/GameBody";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div className="App">
            <Header score={score} highScore={highScore} />
            <Gamebody />
        </div>
    );
}

export default App;
