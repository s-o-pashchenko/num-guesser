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
        genNum(); // new random number
    } else if (userGuess > secretNum) {
        alert("No, you're wrong, It is too high. Try again."); // Notify the user of an incorrect guess
    } else if (userGuess < secretNum) {
        alert("No, you're wrong, It is too low. Try again."); // Notify the user of an incorrect guess        
    }
}

function validateInputFirst() {
    let inputElement = document.getElementById("guess");
    let inputValue = parseInt(inputElement.value);
    if (inputValue > 100) {
        inputElement.value = "100";
    } else if (isNaN(inputValue)) {
        inputElement.value = "";
    } else if (inputValue < 0) {
        inputElement.value = "0";
    } else if (inputElement.value.length > 2) {
        inputElement.value = "0";
    }
}
