// Creates an array that lists out all of the options (a-z).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creating variables to hold the number of wins, loses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 9;
var userChoices = [];

//Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//This function is run whenver the user presses a key.
document.onkeyup = function(event) {

    //Determines which key was pressed.
    var userGuess = event.key;
    userChoices.push(userGuess);

    //This logic determines the outcome of the game, and increments the appropriate number
    if (userGuess === computerGuess) {
        wins++;
        guesses = 9;
        userChoices = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    }
    else if (guesses === 1) {
        losses++;
        guesses = 9;
        userChoices = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    }
    else {
        guesses--;
    }
    
    //Display the user guesses, and wins/losses.
    document.getElementById("user-choices").textContent = userChoices;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guesses;
};