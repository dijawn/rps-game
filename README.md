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
        Function body: assign variables for rock/paper/scissor that map the string to a number 1,2,3. Print the selection to the console as a string
