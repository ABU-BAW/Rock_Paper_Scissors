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



function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice)
        return "it's a tie";
    else if((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")){
        return "you win";
        
    }else return "computer wins";

} 


function playGame(){

    let humanScore = 0
    let computerScore = 0;
    for (i = 0; i < 5; i++){
        
        console.log(`Round ${i + 1}`);
        

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        console.log(`human:${humanSelection} computer: ${computerSelection}`);

        if(result === "you win")
            humanScore++;
        else if (result === "computer wins")
            computerScore++;
    }
    if (humanScore > computerScore)
        return console.log("you win the Games");
    else if(humanScore < computerScore)
        return console.log("The computer wins the games");
    else return console.log("it's a tie");

}
playGame();