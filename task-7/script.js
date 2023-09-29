let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

function makeMove(index) {
  if (!board[index]) {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    if (checkWin()) {
      document.getElementById('winner').innerText = `Player ${currentPlayer} wins!`;
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  if (!board.includes('')) {
    document.getElementById('winner').innerText = 'It\'s a draw!';
    return true;
  }
  return false;
}
