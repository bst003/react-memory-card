import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hello world");

root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);

/*
Thoughts
  - Should Body State hold "clicked" state for individual cards? 
  - Will use pokeAPI

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
          * on useEffect(() => {}, []); (componentDidMount) perform fetch of data from API
          * format: "https://pokeapi.co/api/v2/pokemon/?limit=12&offset=20" 
        * Array to hold cards
        * Method to shuffle cards
      - Instructions (html element)
      - Card.js (component)

*/
