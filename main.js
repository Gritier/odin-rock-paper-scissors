
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return "Scizzors";
    }
}

function getHumanChoice() {
    while(true) {
        choice = prompt("What's your choice? ");

        if (choice.toLowerCase() === 'rock'){
            return 'Rock';
        } else if ( choice.toLowerCase() === 'paper') {
            return 'Paper';
        } else if ( choice.toLowerCase() === 'scizzors'){
            return 'Scizzors';
        } else {
            console.log('You inserted an invalid input! Retry!\n')
        }
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
            console.log("That's a draw!");
        } else if ((humanChoice === 'Rock' && computerChoice === 'Scizzors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scizzors' && computerChoice === 'Paper')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore += 1;
        }
    }

    for(let i = 0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`SCORE | Human: ${humanScore} | Computer: ${computerScore}`);
    }
}

playGame()
