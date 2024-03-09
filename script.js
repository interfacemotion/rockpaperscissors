let choice;
let initialize = 1;
let human = 0;
let machine = 0;
let winner;
let gamesPlayed = 0;
let gameNumber = 5;

function getComputerChoice () {
    randnum = Math.floor(Math.random() * 3) + 1;
    // console.log(randnum);
    switch (randnum) {
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        case 3:
            choice = "rock";
            break;
    }
    console.log(`The computers's choice is ${choice}.`);
}

function gameCounter () {
    gamesPlayed++;
    console.log(`Games played ${gamesPlayed}.`);
    if (gamesPlayed == gameNumber) {
        if (human > machine) {
            console.log("The winnder is the Human!");
        } else if (human < machine) {
            console.log("The winnder is the Machine!");
        } else {
            console.log("It is a tie!");
        }
    }
}

let playerChoice;

function playerSelection () {
    playerChoice = prompt("What is your choice");
    playerChoiceUpper = playerChoice.toUpperCase();
}

function checkPassedInput () {
    playerSelection();
    if (playerChoiceUpper == "ROCK" ||
        playerChoiceUpper == "SCISSORS" ||
        playerChoiceUpper == "PAPER" ) {
            initialize = 0;
            playGame();
    } else {
        console.log("Invalid input has been given.");
    }
}

function playGame () {
    if (initialize) {
        checkPassedInput();
    } else {
        for (let gamesPlayed = 0; gamesPlayed < gameNumber; gamesPlayed++) {
            console.log(`Your choice is ${playerChoice}.`);
            getComputerChoice();
            switch (playerChoiceUpper) {
                case "ROCK":
                    switch (choice) {
                        case "scissors": 
                            console.log("Rock beats scissors. Human Wins!");
                            ++human;
                            gameCounter();
                            break;
                        case "paper":
                            console.log("Paper beats rock. Machine Wins!");
                            ++machine;
                            gameCounter();
                            break;
                        case "rock":
                            console.log("It's a tie!");
                            gameCounter();
                            break;
                    }
                    break;
                case "PAPER":
                    switch (choice) {
                        case "scissors": 
                            console.log("Scisssors beats paper. Machine Wins!");
                            ++machine;
                            gameCounter();
                            break;
                        case "paper":
                            console.log("It's a tie!");
                            gameCounter();
                            break;
                        case "rock":
                            console.log("Paper beats rock. Human Wins!");
                            ++human;
                            gameCounter();
                            break;
                    }
                    break;
                case "SCISSORS":
                    switch (choice) {
                        case "scissors": 
                            console.log("It's a tie!");
                            gameCounter();
                            break;
                        case "paper":
                            console.log("Scissors beats paper. Human Wins!");
                            ++human;
                            gameCounter();
                            break;
                        case "rock":
                            console.log("Rock beats scissors. Machine Wins!");
                            ++machine;
                            gameCounter();
                            break;
                    }
                    break;
                default:
                    console.log("Invalid input has been given.");
            }
        }
    }
}

playGame();
