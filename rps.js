let computerChoice
let playerChoice
let promptPlayer

function getComputerChoice() {
    let shoot = Math.floor(Math.random() * 3)
    console.log(shoot)
    switch (shoot) {
        case 0:
            choice = 'Rock'
            console.log(computerChoice)
            break;
        case 1:
            choice = 'Paper'
            console.log(computerChoice)
            break;
        case 2:
            choice = 'Scissors'
            console.log(computerChoice)
            break;
        default:
            console.log('No choice was made by Computer')
    }
    return computerChoice;
}

function getHumanChoice(){
    promptPlayer =  prompt("Your turn! Choose '1' for Rock, '2' for Paper, or '3' for Scissors")
    switch (Number(promptPlayer)) {
        case 1:
            playerChoice = 'Rock'
            console.log('Player chose ' + playerChoice)
            break;
        case 2:
            playerChoice = 'Paper'
            console.log('Player chose ' + playerChoice)
            break;
        case 3:
            playerChoice = 'Scissors'
            console.log('Player chose ' + playerChoice)
            break;
        default:
            console.log('Invalid choice. You may only choose numbers 1-3.')
    }
    return playerChoice;
}