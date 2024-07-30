let humanScore = 0;
let computerScore = 0;
let HumanSelection;
let ComputerSelection;
let result = '';

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
let choice = document.querySelector("#choice");
let res = document.querySelector(".result");
let score = document.querySelector(".score");
let winner = document.querySelector(".winner");
choice.addEventListener("click", (event) => {
    
    let target = event.target;
    switch(target.id) {
        case "Rock":
            HumanSelection = "Rock";
            ComputerSelection = getComputerChoice();
            playround(HumanSelection, ComputerSelection);
            res.textContent = result;
            
            break;
        case "Paper":
            HumanSelection = "Paper";
            ComputerSelection = getComputerChoice();
            playround(HumanSelection, ComputerSelection);
            res.textContent = result;
            break;
        case "Scissors": 
            HumanSelection = "Scissors";
            ComputerSelection = getComputerChoice();
            playround(HumanSelection, ComputerSelection);
            res.textContent = result;
            break;        
    }
    score.textContent = `Human:${humanScore}    Computer:${computerScore}`;
    if (humanScore == 5 && humanScore > computerScore) {
            winner.textContent = "You Won the GAME!!!";
            humanScore = 0;
            computerScore = 0;
    }
    if (computerScore == 5 && computerScore > humanScore) {
        winner.textContent = "You Lost Computer won the Game!!";
        humanScore = 0;
        computerScore = 0;
    }
})

function playround(HumanChoice,ComputerChoice) {
    if (HumanSelection.toLowerCase() == "rock" && ComputerSelection == "scissors") {
        result = "You Win! Rock beats Scissors";
       return humanScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "rock" && ComputerSelection == "paper") {
        result = "You Lose! Paper beat Rock";
       return computerScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "paper" && ComputerSelection == "rock") {
        result = "You Win! Paper beats Rock";
       return humanScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "paper" && ComputerSelection == "scissors") {
        result = "You Lose! Sicssors beats Paper";
        return computerScore += 1;
    }
    else if (HumanSelection.toLowerCase() == "scissors" && ComputerSelection == "paper") {
        result = "You Win! Sicssors beat Paper";
        return humanScore += 1
    }
    else if (HumanSelection.toLowerCase() == "scissors" && ComputerSelection == "rock") {
        result = "You Lose! Rock beats Sicssors";
        return computerScore += 1;
    }
    else if (HumanSelection.toLowerCase() == ComputerSelection) {
        result = "Tie!";
    }
}
