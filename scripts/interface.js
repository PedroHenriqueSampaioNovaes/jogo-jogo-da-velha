const squares = document.querySelectorAll('.square');

document.addEventListener('DOMContentLoaded', () => {
  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      window.alert(`Fim de jogo! Vencedor: ${playerTime} \nRodada: ${move}`);
    });
  }
  updateSquare(position);
}

function updateSquare(position) {
  const square = document.getElementById(position.toString());
  const symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

const restart = document.querySelector('#restart');
restart.addEventListener('click', restartGame);

function restartGame() {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }
  
  playerTime = 0;
  gameOver = false;
  move = 0;
  restartSquares();
}

function restartSquares() {
  const xMove = document.querySelectorAll('.x');
  const oMove = document.querySelectorAll('.o');

  xMove.forEach((x) => x.remove());
  oMove.forEach((o) => o.remove());
}
