function getComputerChoice(){
    let rpsNum = Math.floor(Math.random() * (4 - 1) + 1);
    if (rpsNum === 1){
        return ('Rock')
    }else if (rpsNum === 2){
        return ('Paper')
    }else if (rpsNum === 3){
        return ('Scissors')
    }
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper')|| (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors')|| (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')){
        return `Computer wins the game! ${computerSelection} beats ${playerSelection.toLowerCase()}`
    }else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')||(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock')|| (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')){
        return `You win the game! ${playerSelection.toLowerCase()} beats ${computerSelection}`
    }else{
        return 'It is a tie!';
    }

};

console.log(playRound('scIssors', getComputerChoice()))