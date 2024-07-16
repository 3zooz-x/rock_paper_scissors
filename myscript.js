let humanScore = 0;
let computerScore = 0;
let HumanSelection;
let ComputerSelection;

function getComputerChoice() {
   let randomnumber = Math.floor(Math.random() * 10) + 1;
   if (randomnumber <= 3) {
    return "rock";
   }
   else if (randomnumber > 3 && randomnumber <= 6) {
    return "paper";
   }
   else {
    return "scissors";
   }
}

function getHumanChoice() {
    let humanchoice = prompt("Rock,Paper or Sicssors?");
    return humanchoice;
}

function playround(HumanChoice,ComputerChoice) {
    if (HumanSelection.toLowerCase() == "rock" && ComputerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
       return humanScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "rock" && ComputerSelection == "paper") {
        console.log("You Lose! Paper beat Rock");
       return computerScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "paper" && ComputerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
       return humanScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "paper" && ComputerSelection == "scissors") {
        console.log("You Lose! Sicssors beats Paper");
        return computerScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "scissors" && ComputerSelection == "paper") {
        console.log("You Win! Sicssors beat Paper");
        return humanScore += 1
    }
    else if (HumanSelection.toLowerCase() == "scissors" && ComputerSelection == "rock") {
        console.log("You Lose! Rock beats Sicssors");
        return computerScore += 1;
    }
    else if (HumanSelection.toLowerCase() == ComputerSelection) {
        console.log("Tie!");
    }
}

function playgame() {
    let i = 0;
    do {
        HumanSelection = getHumanChoice();
        ComputerSelection = getComputerChoice();
        console.log(HumanSelection);
        console.log(ComputerSelection);
        playround(HumanSelection, ComputerSelection);
        i++;
    }
    while(i < 5)
    if (humanScore > computerScore) {
        console.log("You Won the GAME!!!");
    }
    else if (humanScore < computerScore) {
        console.log("You Lost Computer won the Game!!");
    }
    else {
        console.log("The Game is a Tie");
    }
}
playgame();