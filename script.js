let choice;

function getComputerChoice () {
    randnum = Math.floor(Math.random() * 3) + 1;
    console.log(randnum);
    if (randnum == 3) {
        choice = "rock";
    } else if (randnum == 2) {
        choice = "scissors";
    } else {
        choice = "paper";
    }
//    return;
//    console.log("");
}

console.log("check");
getComputerChoice();
console.log(choice);