//Create variables to store player and computer wins
let computerWins = 0;
let playerWins = 0;
let tieGames = 0;

//Create function to get random computer selection 
let computerSelection = function getComputerChoice () {
    //Generate a random number between >= 0 and < 1 (math.random). Multiply output by max option number (in this case Rock, paper, or scissor). Round output down to closest whole number (math.floor). Store output in variable "randomNum"
    let randomNum = (Math.floor(Math.random()* (3)))
    //Console.log randomNum to ensure correct functionality. It should output either 0, 1, or 2
    //console.log(`The random number selected is ${randomNum}`)
    //Create else if statement to return RPS choice based on random number output
    if (randomNum === 0) {
        return "Rock"
    }else if (randomNum === 1) {
        return "Paper"
    }else if (randomNum === 2) {
        return "Scissors"
    }else {
        console.log("Hmm, something messed up here")
    }
};
//Store the output in variable computerSelection
//let computerSelection = getComputerChoice();
//Log the computerSelection variable to ensure the function is outputting the correct data
//console.log(`The computer selects: ${computerSelection()}`);

//Create function to collect user input
let playerSelection = function getPlayerChoice() {
    return prompt("Choose Your Weapon")
};
//Store the output of getPlayerChoice in variable
//let playerSelection = getPlayerChoice();
//Log the output of playerSelection to see if the dialog box appears and if the user entry is stored
//console.log(`The player has chosen to fight with: ${playerSelection()}`);

//Declare function that compares the computerSelection output against the playerSelection output and then logs a winner
function playRound(playerSelection, computerSelection){
    //Log the value of playerSelection and computerSelection before each round
    console.log("The player chose: "+playerSelection.toLowerCase()+" \n The computer chose: "+computerSelection)
    //These are all of the computer win scenarios
    if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper')|| (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors')|| (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')){
        //Increment the computerWins variable each time the above conditions are met
        computerWins++
        //Return the following message
        return (`Computer wins the game! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
    //These conditions cover all of the player win scenarios
    }else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')||(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock')|| (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')){
        //Increment the playerWins variable each time the above conditions are met
        playerWins++
        //Return the following message
        return (`You win the game! ${playerSelection.toLowerCase()} beats ${computerSelection}`)
    //This is in case of a tie
    }else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        //Increment the tieGames variable
        tieGames++
        return ('It\'s a tie!');
    //This should never run, so if it prints to the console, something is wrong
    }else {
        return ("Something must have broken somewhere, I guess.");
    }
};

//Create another function that runs five consecutive rounds between the player and computer and then determines the winner
function game() {
    //Create a for loop that will call playRound 5 times. Start at 1 to make it more human readable
    for (i = 1; i < 6; i++) {
        console.log(playRound(playerSelection(), computerSelection()));
    }
    whoWon();
};
//Call the function to see if it works as intended
game();

//Create function to determine the winner after 5 rounds have been played
function whoWon() {
    //Write an if statement that returns a different message based on a comparison of the playerWins and computerWins variables
    if (computerWins > playerWins) {
        alert ("Computer: "+computerWins+"\nPlayer: "+playerWins+"\nTie Games: "+tieGames+"\nYou just got defeated by a random number generator")
    } else {
        alert ("Computer: "+computerWins+"\nPlayer: "+playerWins+"\nTie Games: "+tieGames+"\nYou beat the computer! Congrats, I guess.")
    }
};

