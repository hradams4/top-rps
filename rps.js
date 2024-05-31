let computerChoice;
let playerChoice;
let promptPlayer;

playGame();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            computerChoice = 'Rock';
            console.log("Computer chose " + computerChoice);
            break;
        case 1:
            computerChoice = 'Paper';
            console.log("Computer chose " + computerChoice);
            break;
        case 2:
            computerChoice = 'Scissors';
            console.log("Computer chose " + computerChoice);
            break;
        default:
            console.log("No choice was made by Computer");
    }
    return computerChoice;
}

function getHumanChoice(){
    promptPlayer =  prompt("Your turn! Choose '1' for Rock, '2' for Paper, or '3' for Scissors");
    
    switch (Number(promptPlayer)) {
        case 1:
            playerChoice = 'Rock';
            console.log("You chose " + playerChoice);
            break;
        case 2:
            playerChoice = 'Paper';
            console.log("You chose " + playerChoice);
            break;
        case 3:
            playerChoice = 'Scissors';
            console.log("You chose " + playerChoice);
            break;
        default:
            console.log("Invalid choice. You may only choose numbers 1-3.");
    }
    return playerChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case 'Rock':
                if(computerChoice === 'Rock'){
                    console.log("Tie game! You both chose Rock!");
                } else if(computerChoice === 'Paper'){
                    computerScore++;
                    console.log("You lose! Paper beats Rock!");
                    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
                } else {
                    humanScore++;
                    console.log("You win! Rock beats Scissors!")
                    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
                }
                break;
            case 'Paper':
                if(computerChoice === 'Rock'){
                    humanScore++;
                    console.log("You win! Paper beats Rock!");
                    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
                } else if(computerChoice === 'Paper'){
                    console.log("Tie game! You both chose Paper!");
                } else {
                    computerScore++;
                    console.log("You lose! Scissors beats Paper!")
                    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
                }
                break;
            case 'Scissors':
                if(computerChoice === 'Rock'){
                    computerScore++;
                    console.log("You lose! Rock beats Scissors!");
                    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
                } else if(computerChoice === 'Paper'){
                    humanScore++;
                    console.log("You win! Scissors beats paper!");
                    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
                } else {
                    console.log("Tie game! You both chose Scissors!")
                }
                break;
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Final score, You: " + humanScore + " Computer: " + computerScore);

    if(humanScore > computerScore){
        console.log("You win!");
    } else {
        console.log("You lose :(");
    }
}