let computerWins = 0;
let playerWins = 0;
let tieGames = 0;
let games = 0;



//Generates random computer selection
let computerSelection = () => {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 0) {
        return 'Frog'
    } else if (randomNum == 1) {
        return 'Slug'
    } else if (randomNum == 2) {
        return 'Snake'
    } else {
        return 'Something Broke'
    }
};

const frog = document.querySelector("#frog");
const slug = document.querySelector("#slug");
const snake = document.querySelector("#snake");
const button = document.querySelector(".button")

window.addEventListener('click', e => {
    if (games < 5){
        return
    }else if (games = 5){
        whoWon();
    }
});

frog.addEventListener('click', e => {
    if (games < 5){
        playRound('Frog', computerSelection());
        games++;
        console.log(`the number of rounds played is: ${games}`);
    }else if (games = 5) {
        return;
    };
});

slug.addEventListener('click', e => {
    if (games < 5){
        playRound('Slug', computerSelection());
        games++;
        console.log(`the number of rounds played is: ${games}`);
    }else if (games = 5) {
        return;
    };
});

snake.addEventListener('click', e => {
    if (games < 5){
        playRound('Snake', computerSelection());
        games++;
        console.log(`the number of rounds played is: ${games}`);
    }else if (games = 5) {
        return;
    };
});

//Create function to compare the two values and return the outcome
function playRound (playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    let compInput = computerSelection.toLowerCase();
    if (playerInput === compInput) {
        tieGames++;
        alert(`Both of your ${playerSelection}s wrestled valiantly, it is a draw!\nComputer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`);
        return console.log("Tie");
    } else if (playerInput === 'frog'&& compInput === 'snake' ||
               playerInput === 'snake'&& compInput === 'slug' ||
               playerInput === 'slug'&& compInput === 'frog') 
            {
                computerWins++;
                alert(`The computer wisely chose the ${computerSelection} and defeated your ${playerSelection}. The stronger fighter has prevailed.\nComputer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`);
                return console.log("Computer Won");
    }else { playerWins++;
            alert(`Your ${playerSelection} arm wrestler is strong. Your opponent's ${computerSelection} stood no chance.\nComputer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`)
    };
};

function whoWon() {
    if (computerWins > playerWins) {
        alert(`The Computer wins! Computer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`)
    } else if (playerWins > computerWins) {
        alert(`The Player wins! Computer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`)
    };
};
        







