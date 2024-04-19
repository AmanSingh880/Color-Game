const PLAYER_X = 'X';
const PLAYER_O = 'O';
let currentPlayer = PLAYER_X;
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
function player_current(){
    if(currentPlayer==PLAYER_X){
        document.getElementById("play-dis").innerText="Player 1 Turn !";
    }
    else{
        document.getElementById("play-dis").innerText="Player 2 Turn !";
    }
    return true;
}
function placeMarker(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        updateUI(row, col);
        setTimeout({},1000);
        if (checkWinner(currentPlayer)) {
            if(currentPlayer==PLAYER_X){
                document.getElementById("win-dis").innerText="Player 1 Win!";
            }
            else{
                document.getElementById("win-dis").innerText="Player 2 Win!";
            }
            resetGame();
        } else if (checkDraw()) {
            document.getElementById("win-dis").innerText="It's a draw!";
            resetGame();
        } else {
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
            player_current();
        }
    }
}
function updateUI(row, col) {
    document.getElementById('gameBoard').querySelectorAll('.box-c')[row * 3 + col].innerText = currentPlayer;
}
function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player) {
            return true;
        }
        if (gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player) {
            return true;
        }
    }
    if (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) {
        return true;
    }
    if (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player) {
        return true;
    }
    return false;
}

// Function to check if it's a draw
function checkDraw() {
    for (let row of gameBoard) {
        for (let cell of row) {
            if (cell === '') {
                return false; // Empty cell found, game continues
            }
        }
    }
    return true; // No empty cells, it's a draw
}

// Function to reset the game
function resetGame() {
    // Clear the game board
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    // Clear the UI
    document.getElementById('gameBoard').querySelectorAll('.box-c').forEach(cell => cell.innerText = '');
    // Reset current player
    currentPlayer = PLAYER_X;
}
