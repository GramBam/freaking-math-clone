let x, y;
let answer = false;
const correctBtn = document.getElementById('correct');
const incorrectBtn = document.getElementById('incorrect');

function startGame() {
  
}

function genNumbers() {
  function getRandomNum() {
    return Math.floor((Math.random() * 10) + 1);
  }
  x = getRandomNum();
  y = getRandomNum();
  answer = getRandomNum();
}

function genQuestion() {
  genNumbers();
  document.getElementById('question').innerHTML = x + " + " + y;
  document.getElementById('answer').innerHTML = Math.floor(Math.random() * 20) + 1
}

function checkAnswer() {
  alert(x + y === +document.getElementById('answer').value ? 'Great' : 'Not Yet');
  document.getElementById('total').value = x + y;
}

function gameOver() {
  alert('game over!')
}