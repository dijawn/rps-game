let computerWins = 0;
let playerWins = 0;
let tieGames = 0;
let games = 0;
let maxGames = 5;



//Generates random computer selection
let computerSelection = () => {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 0) {
        return 'Frankenstein'
    } else if (randomNum == 1) {
        return 'Mummy'
    } else if (randomNum == 2) {
        return 'Dracula'
    } else {
        return 'Something Broke'
    }
};

const frankenstein = document.querySelector("#frankenstein");
const slug = document.querySelector("#dracula");
const snake = document.querySelector("#mummy");
const button = document.querySelector(".button")
const results = document.querySelector("#results");
const scoreboard = document.querySelector("#scoreboard");
const playerScore = document.querySelector("#player");
const compScore = document.querySelector("#comp");
const draws = document.querySelector("#draws")
const body = document.querySelector("body")

window.addEventListener('click', e => {
    console.log(games)
    if ((computerWins+playerWins+tieGames) === maxGames) {
        whoWon();
    } else {
        return;
    }
});

window.addEventListener('click', e => {
    playerScore.textContent = `${playerWins}`;
    compScore.textContent = `${computerWins}`;
    draws.textContent = `${tieGames}`;
    scoreboard.appendChild("player", "comp", "draws");;
});

frankenstein.addEventListener('click', e => {
    if (games < maxGames){
        games++;
        playRound('Frankenstein', computerSelection());
    }else if (games = maxGames) {
        return;
    };
});

dracula.addEventListener('click', e => {
    if (games < maxGames){
        games++;
        playRound('Dracula', computerSelection());
    }else if (games = maxGames) {
        return;
    };
});

mummy.addEventListener('click', e => {
    if (games < maxGames){
        games++;
        playRound('Mummy', computerSelection());
    }else if (games = maxGames) {
        return;
    };
});

//Create function to compare the two values and return the outcome
function playRound (playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    let compInput = computerSelection.toLowerCase();
    if (playerInput === compInput) {
        tieGames++;
        results.textContent = `Both of your ${playerSelection}s wrestled valiantly, it is a draw!`;
        scoreboard.appendChild("results");
    } else if (playerInput === 'frankenstein'&& compInput === 'dracula' ||
               playerInput === 'dracula'&& compInput === 'mummy' ||
               playerInput === 'mummy'&& compInput === 'frankenstein') 

            {   computerWins++;
                results.textContent = `The computer wisely chose the ${computerSelection} and defeated your ${playerSelection}. The stronger fighter has prevailed.`;
                scoreboard.appendChild("results");
                
    }else { playerWins++;
            results.textContent = `Your ${playerSelection} wrestler is strong. Your opponent's ${computerSelection} stood no chance.`;
            scoreboard.appendChild("results");
    };
};

function whoWon() {
    if (computerWins > playerWins) {
        results.textContent = `The match is over. After ${maxGames} games the computer has prevailed`;
        scoreboard.appendChild("results");
    } else if (playerWins > computerWins) {
        results.textContent = `The match is over. After ${maxGames} games the human has prevailed`;
        scoreboard.appendChild("results");
    } else {
        results.textContent = `The match is over. After ${maxGames} games we declare a draw`;
        scoreboard.appendChild("results");
    };
};
        







