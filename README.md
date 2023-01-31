# React Memory Card Game

Pokémon themed memory card game created with React using <code>create-react-app</code>.
The data for this app is pulled in from the <a href="https://pokeapi.co/">PokéAPI</a>.

View the live project <a href="">here</a>.

## How To Play

The goal of the game is to click all of the cards without clicking any card twice.
The cards randomize in order each time one is clicked.

## How It Works

The scoring functionality of the game is stored as state of the <code>App</code> component.

The data for the game is fetched from the PokéAPI, modified and stored as an array(<code>pokeArr</code>) in the state of the <code>GameBody</code> component. The <code>GameBody</code> contains another method to shuffle the data in <code>pokeArr</code> each time a card is clicked.

The <code>GameCard</code> components each contain a state to keep track of whether or not they were clicked.

When the player wins or loses the game the <code>GameModal</code> is trigged to open through updating the <code>modalOpen</code> state variable in the <code>App</code> component.

Once the modal is closed the <code>App</code> component sets a new <code>gameId</code> state which then triggers all of the <code>GameCard</code> components to reset their clicked state.
