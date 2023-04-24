
let maxQ= 5//Generate random computer selection
let playerWinCount = 0;
let computerWinCount = 0;

let computerSelection = function getComputerChoice(){
    let rpsNum = Math.floor(Math.random() * 3); //
    if (rpsNum === 0){
        return ('Rock')
    }else if (rpsNum === 1){
        return ('Paper')
    }else if (rpsNum === 2){
        return ('Scissors')
    }
};

//Ensure expected output is returned by logging to console
//console.log(computerSelection());

//Create function to collect user input and store it in variable "singleRound"
let playerSelection = function getPlayerChoice(i) {
    return prompt(i +"/"+maxQ+": " + "Choose Thine Weapon");
}

//Ensure dialog box is created when the function is called
//console.log(playerSelection());


//Create function that uses output of getComputerChoice and getPlayerChoice to play a round of RPS
function playRound(playerSelection, computerSelection){
    console.log("Player selected: "+ playerSelection+"\n Computer selected: "+computerSelection)
    if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper')|| (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors')|| (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')){
        computerWinCount++
        return (`Computer wins the game! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
    }else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')||(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock')|| (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')){
        playerWinCount++
        return (`You win the game! ${playerSelection.toLowerCase()} beats ${computerSelection}`)
    }else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return ('It is a tie!');
    }else {
        return ("you can't spell");
    }
};

//Ensure function outputs expected result
//(playRound(playerSelection(), computerSelection()))

//Create function that calls playRound 5 times
function game() {
    //for loop that goes from 1 to 5
    for (let i = 1; i < (maxQ+1); i++) {
        playRound(playerSelection(i), computerSelection());
    }

    //Find who won AFTER all rounds
    whoWon();
};

function whoWon () {

    if (playerWinCount > computerWinCount) {
        alert("Player: "+ playerWinCount +"\n Computer: "+computerWinCount +"\n Player wins!")
    }else if (playerWinCount < computerWinCount){
        alert ("Player: "+ playerWinCount +"\n Computer: "+computerWinCount +"\n Computer wins!");
    }
};

//Ensure this runs the playRound function 5 times
game();
