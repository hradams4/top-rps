let choice
function getComputerChoice() {
    let shoot = Math.floor(Math.random() * 3)
    console.log(shoot)
    switch (shoot) {
        case 0:
            choice = 'Rock'
            console.log(choice)
            break;
        case 1:
            choice = 'Paper'
            console.log(choice)
            break;
        case 2:
            choice = 'Scissors'
            console.log(choice)
            break;
        default:
            console.log('No choice was made by Computer')
    }
    return choice;
}