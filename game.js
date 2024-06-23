const moves = ['✊', '✋', '✌️'];
let playerScore = 0;
let computerScore = 0;
let playerMove = '';

function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function setPlayerMove(move) {
    playerMove = move;
    document.getElementById('playerMove').value = move;
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) return 'draw';
    if (
        (playerMove === '✊' && computerMove === '✌️') ||
        (playerMove === '✋' && computerMove === '✊') ||
        (playerMove === '✌️' && computerMove === '✋')
    ) {
        return 'player';
    }
    return 'computer';
}

function playRound() {
    if (!playerMove) {
        alert("Please select a move using the emojis or input field.");
        return;
    }
    
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    
    if (result === 'player') {
        playerScore++;
        alert(`You win this round! Your move: ${playerMove}, Computer's move: ${computerMove}\nScore - Player: ${playerScore}, Computer: ${computerScore}`);
    } else if (result === 'computer') {
        computerScore++;
        alert(`Computer wins this round! Your move: ${playerMove}, Computer's move: ${computerMove}\nScore - Player: ${playerScore}, Computer: ${computerScore}`);
    } else {
        alert(`It's a draw! Your move: ${playerMove}, Computer's move: ${computerMove}\nScore - Player: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore === 10) {
        alert("Congratulations! You reached 10 wins.");
        window.open('https://www.youtube.com/', '_blank');
    } else if (computerScore === 10) {
        alert("The computer reached 10 wins first. Better luck next time!");
    }

    playerMove = '';  
    document.getElementById('playerMove').value = ''; 
}
