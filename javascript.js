function getComputerChoice(){

    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random()*3);
    return options[choice];
}


function getHumanChoice(){
    const options = ["rock", "paper", "scissors"];
    const choice = prompt("enter rock, paper or scissors to play!!: ");
    if (!options.includes(choice))
        return "invalid choice";
    else if (choice === options[0])
        return "rock";
    else if (choice === options[1])
        return "paper";
    else if (choice === options[2]) return "scissors";

}

const options = ["rock", "paper", "scissors"];

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice)
        return `it's a tie \nYour Choice |${humanChoice} : ${computerChoice}|  Computer's Choice`;
    else if((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")){
        return `you win \nYour Choice |${humanChoice} : ${computerChoice}|  Computer's Choice`;
        
    }else return `computer wins \nYour Choice |${humanChoice} : ${computerChoice}| Computer's Choice`;

} 

const container = document.querySelector("div");

const rock = document.querySelector("#rock");
rock.setAttribute("style","color: black; background: grey; border: 3px solid green");
rock.addEventListener("click", function(event){displayMessage(playRound("rock",getComputerChoice()))});

const paper = document.querySelector("#paper");
paper.setAttribute("style","color: black; background: brown; border: 3px solid green");
paper.addEventListener("click", function(event){displayMessage(playRound("paper",getComputerChoice()))});

const scissors = document.querySelector("#scissors");
scissors.setAttribute("style","color: black; background: red; border: 3px solid green");
scissors.addEventListener("click", function(event){displayMessage(playRound("scissors",getComputerChoice()))});

function displayMessage(message) {
    const messageElement = document.querySelector("#gameMessages");
    messageElement.textContent = message;
}