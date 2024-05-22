function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return "Scissors";
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function resetGame() {
        const paragraph = document.querySelector("#winnerParagraph");
        paragraph.remove()
        updateScore(0,0);
        humanScore = 0;
        computerScore = 0;
    }

    function playRound(humanChoice, computerChoice){
        let lastTurn;
        if (humanScore == 5 || computerScore == 5) {
            resetGame();
        }
        if (humanChoice === computerChoice) {
            lastTurn = `${humanChoice} vs ${computerChoice} : It's a draw!`
        } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
            humanScore += 1;
            lastTurn = `${humanChoice} vs ${computerChoice} : You get a point!`
        } else {
            computerScore += 1;
            lastTurn = `${humanChoice} vs ${computerChoice} : Computer get a point!`
        }

        updateScore(humanScore, computerScore);

        if (document.querySelector('#lastResultParagraph')) {
            const turnResultParagraph = document.querySelector('#lastResultParagraph');
            turnResultParagraph.textContent = lastTurn;
        } else {
            const turnResultParagraph = document.createElement('p');
            turnResultParagraph.id = 'lastResultParagraph';
            turnResultParagraph.textContent = lastTurn;
            resultsDiv.appendChild(turnResultParagraph);
        }

        endGame();
    }

    function endGame() {
        if (humanScore == 5 || computerScore == 5){
            const winnerParagraph = document.createElement('p');

            humanScore > computerScore ? winnerParagraph.textContent = "You are the WINNER!" : winnerParagraph.textContent = "The computer won the game!";
            winnerParagraph.id = 'winnerParagraph';
            resultsDiv.appendChild(winnerParagraph);
            return true;
        } else {
            return false
        }
    }

    function updateScore(humanScore, computerScore){
        resultsDiv.textContent = `SCORE | Human: ${humanScore} | Computer: ${computerScore}`;
    }

    const body = document.querySelector('body');

    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    rockButton.addEventListener('click', () => {playRound('Rock', getComputerChoice())});
    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    paperButton.addEventListener('click', () => {playRound('Paper',getComputerChoice())});
    const scizzorsButton = document.createElement('button');
    scizzorsButton.textContent = 'Scissors';
    scizzorsButton.addEventListener('click', () => {playRound('Scissors',getComputerChoice())});

    body.appendChild(rockButton);
    body.appendChild(paperButton);
    body.appendChild(scizzorsButton);

    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = `SCORE | Human: ${humanScore} | Computer: ${computerScore}`

    body.appendChild(resultsDiv);
}

playGame();
