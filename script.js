"use strict";

// Declare a variable to store the secret number
let secretNum;

// Function to generate a random number between 1 and 100 and store it in the 'secretNum' variable
const genNum = () => secretNum = Math.floor(Math.random() * 100) + 1;

// Generate the initial random number
genNum();

// Function to handle the user's number guess
function guessNum() {
    // Get the user's guess from the input field with the id "guess"
    const userGuess = parseInt(document.getElementById("guess").value);

    // Log the user's input and the randomly generated number for debugging
    console.log(`user input: ${userGuess}`);
    console.log(`random generated number: ${secretNum}`);

    // Check if the user's guess matches the secret number
    if (userGuess == secretNum) {
        alert("You guessed correctly!"); // Notify the user of a correct guess
    } else {
        alert("No, you're wrong. Try again."); // Notify the user of an incorrect guess
    }
}
