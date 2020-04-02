let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


//determine the target number
const generateTarget = () => {
return Math.floor(Math.random() * 10);
}


//determine the round winner
const compareGuesses = (humanGuessInput, computerGuess, target) => {
    if (Math.abs(target - humanGuessInput) <= Math.abs(target - computerGuess)) {
        return true;
    } else {
        return false;
    }
}


// update the display score
const updateScore = (winner) => {
    if (winner === 'human') {
        return humanScore++;
    } else {
        return computerScore++;
    }
}


//update round number
const advanceRound = () => {
 return currentRoundNumber++;
}