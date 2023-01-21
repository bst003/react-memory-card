import logo from "./logo.svg";
import "./App.css";

import React, { useState, useContext } from "react";

import Header from "./components/Header";

function App() {
    const [score, setScore] = useState(0);

    return <div className="App">{score}</div>;
}

export default App;
