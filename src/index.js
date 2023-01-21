import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hello world");

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/*
Thoughts
  - Should Body State hold "clicked" state for individual cards? 
  - Try to use createContext to pass down updateScore function? https://reactjs.org/docs/context.html

Structure

  - App.js
    * Functionality
      * Update score method
      * Method to check if score is higher than high score
      * State
        * Score
        * High Score
    - Header.js (component)
      - Title (html element)
      - Scoreboard.js (component)
    - Body.js (component)
      * Functionality
        * Performs API Call
        * Array to hold cards
        * Method to shuffle cards
      - Instructions (html element)
      - Card.js (component)

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
