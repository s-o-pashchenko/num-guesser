"use strict";

let secretNum;
const genNum = () => secretNum = Math.floor(Math.random() * 100) + 1;
genNum();
function guessNum() {
    const userGuess = document.getElementById("guess").value;
    console.log(`user input: ${userGuess}`)
    console.log(`random generated number: ${secretNum}`);
}