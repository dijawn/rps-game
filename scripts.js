let computerWins = 0;
let playerWins = 0;
let tieGames = 0;
let games = 1;


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

const frog = document.querySelector(".frog");
const slug = document.querySelector(".slug");
const snake = document.querySelector(".snake");
const btn = document.querySelector(".options")

frog.addEventListener('click', e => {
    if (games < 5){
        playRound('Frog', computerSelection());
        games++;
        console.log(games);
    }else if (games = 5) {
        playRound('Frog', computerSelection());
    }else {
        return whoWon();
    }
});

slug.addEventListener('click', e => {
    playRound('Slug', computerSelection());
    games++;
})

snake.addEventListener('click', e => {
    playRound('Snake', computerSelection());
    games++;
})

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
    if (computerWins > (playerWins && tieGames)) {
        alert(`The Computer wins! Computer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`)
    } else if (playerWins > (computerWins && tieGames)) {
        alert(`The Player wins! Computer: ${computerWins}\nPlayer: ${playerWins}\nDraws: ${tieGames}`)
    };
};
        














/*
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
*/
