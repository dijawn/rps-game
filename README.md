# rps-game

Problem Definition:
Create a rock paper scissor program where the user inputs a choice between (Rock, Paper, Scissors)and compares their choice to a randomly generated selection by the computer. 

The result should read "You win, keep going!" if the player plays
1. Rock and the computer plays scissors
2. Scissors and the computer plays paper
3. Paper and the computer plays rock

The result should read "Tie, play again!" if the player and computer play the same selection

The result should read "You lose, try again!" if the player plays
1. Rock and the computer plays paper
2. Scissors and the computer plays rock
3. Paper and the computer plays scissors

Step 1: Create a function that will randomly generate the computer's choice and prints it to the console. 
    Declare Function Name and assign function value to variable getComputerChoice
        Function body: assign variables for rock/paper/scissor that map the string to a number 1,2,3. 
        Print the selection to the console as different strings

Step 2: Write a function that plays a single round of RPS. The user will input their selection, and the computer will use the value generated in Step 1.
    Define playerSelection and make it case insensitive
    Define computerSelection and make it the value of the output of getComputerChoice
    Declare Function - playRound() and include two parameters (playerSelection and computerSelection)
    Player selection is rock && computer selection is paper return (Computer Wins! Paper beats rock!)
    Player selection is rock && computer selection is scissors (You win! Rock beats scissors)
    Player selection is paper && computer selection is rock (You win!)
    Player selection is paper && computer selection is scissors (you lose)
    Player selection is scissors && computer selection is paper (you win!)
    Player selection is scissors && computer selection is rock (you lose!)

Step 3: Write a function that will call the playRound function 5 times and determines a winner then declares the winner (even if either the player or the computer wins 3 games before all 5 have been played)
    Declare the function, game(), as a self executing function
    Initialize the variable playerSelection and assign it to a prompt requestin user choice
    

Step 4: Create 3 buttons representing each of the three options. When the user clicks a button, their choice is run through the function from above and return the result when compared to a randomly generated computer selection. 
    
