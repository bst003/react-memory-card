import React, { useState, useContext } from "react";
import "./assets/scss/app.scss";

import Header from "./components/Header";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div className="App">
            <Header score={score} highScore={highScore} />
        </div>
    );
}

export default App;
